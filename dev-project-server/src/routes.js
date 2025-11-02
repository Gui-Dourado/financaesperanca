const express = require('express');

const auth = require('./middlewares/auth');

const SessionsController = require('./controllers/SessionsController');
const UserController = require('./controllers/UserController');

const ModuleController = require('./controllers/ModuleController');
const ResponseController = require('./controllers/ResponseController');

const CommentController = require('./controllers/CommentController');

const SurveyAnswerController = require('./controllers/SurveyAnswerController');

const ProgressController = require('./controllers/ProgressController');

const routes = express.Router();

routes.post('/sessions', SessionsController.create);
routes.post('/users', UserController.create);

routes.use(auth);

routes.get('/users', UserController.index);

routes.get('/module/:module_id', ModuleController.getModuleById);
routes.get('/module/:module_id/questions', ModuleController.getQuestionByModuleId);
routes.get('/questions/:question_id/alternatives', ModuleController.getAlternativeByQuestionId);

routes.post('/responses', ResponseController.create);
routes.post('/responses/check-by-module', ResponseController.checkModuleResponses);

routes.post('/comments', CommentController.create);
routes.get('/modules/:module_id/comments', CommentController.listByModule);

routes.post('/survey-answers', SurveyAnswerController.create);

routes.get('/progress/:user_id/last', ProgressController.getLastCompleteModule);
routes.put('/progress/:user_id', ProgressController.updateProgress);

module.exports = routes;