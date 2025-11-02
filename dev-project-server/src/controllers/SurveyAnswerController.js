const SurveyAnswer = require('../models/SurveyAnswers');

module.exports = {
  async create(req, res) {
    try {
      const { user_id, response } = req.body;

      if (!user_id || !response) {
        return res.status(400).json({ error: 'Campos obrigatórios ausentes.' });
      }

      const existingAnswer = await SurveyAnswer.findOne({
        where: { user_id }
      });

      if (existingAnswer) {
        return res.status(409).json({ error: 'Usuário já respondeu esta pesquisa.' });
      }

      const newAnswer = await SurveyAnswer.create({
        user_id,
        response
      });

      return res.status(201).json(newAnswer);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error do servidor interno' });
    }
  }
}