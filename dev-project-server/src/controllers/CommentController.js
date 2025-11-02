const Comment = require('../models/Comment');

module.exports = {
    async create(req, res) {
        try {
            const { user_id, module_id, content } = req.body;

            if (!user_id || !module_id) {
                return res.status(400).json({ error: 'Campos obrigatórios ausentes.' });
            }

            const parsedId = parseInt(module_id, 10);
            if (isNaN(module_id)) {
                return res.status(400).json({ error: 'module_id inválido' });
            }

            const comment = await Comment.create({
                user_id,
                module_id: parsedId,
                content
            });

            return res.status(201).json(comment);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro do servidor interno.' });
        }
    },

    async listByModule(req, res) {
        try {
            const { module_id } = req.params;

            if (!module_id) {
                return res.status(400).json({ error: 'ID do módulo é obrigatório' });
            }

            const parsedId = parseInt(module_id, 10);
            if (isNaN(module_id)) {
                return res.status(400).json({ error: 'module_id inválido' });
            }

            const comments = await Comment.findAll({
                where: { module_id: parsedId },
                include: { association: 'comments' },
                order: [['created_at', 'DESC']]
            });

            return res.status(200).json(comments);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro do servidor interno.' });
        }
    }
}