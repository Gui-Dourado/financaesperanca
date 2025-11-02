const ProgressUser = require('../models/ProgressUser');

module.exports = {
    async updateProgress(req, res) {
        try {
            const { user_id } = req.params;
            const { field } = req.body;

            const validFields = [
                'module1_video',
                'module1_questionnaire',
                'module2_video',
                'module2_questionnaire',
                'module3_video',
                'module3_questionnaire',
                'survey_answers'
            ];

            console.log("Campo recebido:", field);

            if (!validFields.includes(field)) {
                return res.status(400).json({ error: 'Campo inválido para progresso.' });
            }

            const userProgress = await ProgressUser.findOne({ where: { user_id } });

            if (!userProgress) {
                return res.status(404).json({ error: 'Progresso do usuário não encontrado.' });
            }

            userProgress[field] = true;
            await userProgress.save();

            return res.json({ message: `Progresso atualizado: ${field}` });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro do servidor interno.' });
        }
    },

    async getLastCompleteModule(req, res) {
        try {
            const { user_id } = req.params;

            const progressOrder = [
                'module1_video',
                'module1_questionnaire',
                'module2_video',
                'module2_questionnaire',
                'module3_video',
                'module3_questionnaire',
                'survey_answers',
            ];

            const userProgress = await ProgressUser.findOne({
                where: { user_id },
                attributes: progressOrder,
                raw: true,
            });

            if (!userProgress) {
                return res.json({ lastCompleted: null, nextField: progressOrder[0] });
            }

            let lastCompleted = null;
            for (const field of progressOrder) {
                if (userProgress[field]) {
                    lastCompleted = field;
                } else {
                    break;
                }
            }

            const lastIdx = lastCompleted ? progressOrder.indexOf(lastCompleted) : -1;
            const nextField = lastIdx + 1 < progressOrder.length ? progressOrder[lastIdx + 1] : null;

            return res.json({ lastCompleted, nextField });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro do servidor interno.' });
        }
    }
}