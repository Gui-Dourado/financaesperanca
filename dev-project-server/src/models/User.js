const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            username: DataTypes.STRING,
            userlastname: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            age: DataTypes.INTEGER,
            gender: DataTypes.ENUM('Feminino', 'Masculino', 'Outro', 'Prefiro não divulgar'),
            terms_use: DataTypes.BOOLEAN,
            ip: DataTypes.STRING,
            country: DataTypes.STRING,
            city: DataTypes.STRING
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.hasMany(models.Comment, { as: 'comments' });
        this.hasMany(models.Response, { foreignKey: 'user_id', as: 'responses' });
        this.hasMany(models.SurveyAnswers, { as: 'surveyaanswers' });
        this.hasMany(models.ProgressUser, { as: 'userProgress' });
    }
}

module.exports = User;