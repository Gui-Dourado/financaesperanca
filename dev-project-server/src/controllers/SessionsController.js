const jwt = require('jsonwebtoken');

const User = require('../models/User');

const checkPassword = require('../services/auth');
const authConfig = require('../config/auth');

module.exports = {
    async create(req, res) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({
                where: { email }
            });

            if (!user) {
                return res.status(404).json({ error: 'O usuário não existe.' });
            }

            const passwordChecked = await checkPassword(user, password);

            if (!passwordChecked) {
                return res.status(401).json({ error: 'Senha inválida' });
            }

            const { id, username } = user;

            return res.status(201).json({
                user: {
                    id,
                    email,
                    username
                },
                token: jwt.sign({ id }, authConfig.secret, {
                    expiresIn: authConfig.expiresIN
                })
            });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro do sevidor interno' });
        }
    }
}