const User = require('../models/User');
const ProgressUser = require('../models/ProgressUser');

const createPasswordHash = require('../services/hash');
const geoFromIp = require('../services/geoIp');

module.exports = {
    async index(req, res) {
        try {
            const users = await User.findAll({ include: { association: 'userProgress' } });

            return res.status(200).json(users);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro do servidor interno.' });
        }
    },

    async create(req, res) {
        try {
            const { username, userlastname, email, password, confpass, age, gender, validation } = req.body;

            if (validation === false) {
                return res.status(400).json({ error: 'É necessário aceitar os termos de uso para criar uma conta.' });
            }

            const user = await User.findOne({
                where: { email }
            });

            if (user) {
                return res.status(422).json({ error: `O email: ${email} já está sendo utilizado.` });
            }

            if (password !== confpass) {
                return res.status(401).json({ error: 'A nova senha está diferente da senha de confirmação.' });
            }

            const passwordLength = password.length;

            if (passwordLength < 4 || passwordLength > 16) {
                return res.status(411).json({ error: 'A senha deve conter entre 4 e 16 caracteres.' });
            }

            if (age < 5 || age > 120) {
                return res.status(411).json({ error: 'A idade deve estar entre 5 e 120 anos.' });
            }

            if (!gender || String(gender).toLowerCase() === 'user') {
                return res.status(400).json({ error: 'Selecione um gênero.' });
            }

            const encryptedPassword = await createPasswordHash(password);

            const ip = (req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress || '')

            const geo = await geoFromIp(ip);

            const newUser = await User.create({
                username,
                userlastname,
                email,
                password: encryptedPassword,
                age,
                gender,
                terms_use: validation,
                ip,
                country: geo ? geo.country : null,
                city: geo ? geo.city : null
            });

            await ProgressUser.create({ user_id: newUser.id });

            return res.status(201).json({ success: 'Conta criada com sucesso!' });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error do servidor interno' });
        }
    }
}