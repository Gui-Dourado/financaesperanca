const Module = require('../models/Module');
const Question = require('../models/Question');
const Alternative = require('../models/Alternative');

module.exports = {
    async getModuleById(req, res) {
        try {
            const { module_id } = req.params;
            const module = await Module.findByPk(module_id);

            return res.status(200).json(module);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro do servidor interno.' });
        }
    },

    async getQuestionByModuleId(req, res) {
        try {
            const { module_id } = req.params;

            const questions = await Question.findAll({
                where: { module_id },
                include: { association: 'alternative' }
            });

            if (!questions || questions.length === 0) {
                return res.status(404).json({ error: 'Nenhuma pergunta encontrada para este módulo.' });
            }

            return res.status(200).json(questions);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro do servidor interno.' });
        }
    },

    async getAlternativeByQuestionId(req, res) {
        try {
            const { question_id } = req.params;

            const alternatives = await Alternative.findAll({
                where: { question_id }
            });

            if (!alternatives || alternatives.length === 0) {
                return res.status(404).json({ error: 'Nenhuma alternativa encontrada para esta pergunta.' });
            }

            return res.status(200).json(alternatives);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro do servidor interno.' });
        }
    }
}