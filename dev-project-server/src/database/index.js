const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');

const Module = require('../models/Module');
const Question = require('../models/Question');
const Alternative = require('../models/Alternative');
const Response = require('../models/Response');

const Comment = require('../models/Comment');

const SurveyAnswers = require('../models/SurveyAnswers');

const ProgressUser = require('../models/ProgressUser');

const connection = new Sequelize(dbConfig);

User.init(connection);

Module.init(connection);
Question.init(connection);
Alternative.init(connection);
Response.init(connection);

Comment.init(connection);

SurveyAnswers.init(connection);

ProgressUser.init(connection);

User.associate(connection.models);

Module.associate(connection.models);
Question.associate(connection.models);
Alternative.associate(connection.models);
Response.associate(connection.models);

Comment.associate(connection.models);

SurveyAnswers.associate(connection.models);

ProgressUser.associate(connection.models);

module.exports = connection;