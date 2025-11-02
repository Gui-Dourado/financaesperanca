const Response = require('../models/Response');
const Question = require('../models/Question');
const Alternative = require('../models/Alternative');

module.exports = {
  async create(req, res) {
    try {
      const { user_id, question_id, alternative_id } = req.body;

      if (!user_id || !question_id || !alternative_id) {
        return res.status(400).json({ error: 'Campos obrigatórios ausentes.' });
      }

      const existingResponse = await Response.findOne({
        where: { user_id, question_id }
      });

      if (existingResponse) {
        return res.status(409).json({ error: 'Usuário já respondeu esta pergunta.' });
      }

      const response = await Response.create({
        user_id,
        question_id,
        alternative_id
      });

      return res.status(201).json(response);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro do servidor interno.' });
    }
  },

  async checkModuleResponses(req, res) {
    try {
      const { user_id, module_id } = req.body;

      if (!user_id || !module_id) {
        return res.status(400).json({ error: 'user_id e module_id são obrigatórios.' });
      }

      const questions = await Question.findAll({
        where: { module_id },
        attributes: ['id'],
      });
      const questionIds = questions.map(q => q.id);

      if (!questionIds.length) {
        return res.status(200).json({
          user_id,
          module_id,
          total_questions: 0,
          answered_count: 0,
          fully_answered: true,
          results: [],
        });
      }

      const responses = await Response.findAll({
        where: { user_id, question_id: questionIds },
        include: [
          { model: Alternative, as: 'alternative', attributes: ['id', 'is_correct', 'description'] },
        ],
      });

      const results = questionIds.map((qid) => {
        const r = responses.find((it) => it.question_id === qid);
        return {
          question_id: qid,
          answered: !!r,
          alternative_id: r ? r.alternative_id : null,
          correct: r?.alternative ? !!r.alternative.is_correct : false,
        };
      });

      const answered_count = responses.length;

      return res.status(200).json({
        user_id,
        module_id,
        total_questions: questionIds.length,
        answered_count,
        fully_answered: answered_count === questionIds.length,
        results,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro do servidor interno.' });
    }
  }
}