const { Model, DataTypes } = require("sequelize")

class SurveyAnswers extends Model {
    static init(sequelize) {
        super.init({
            user_id: DataTypes.INTEGER,
            response: DataTypes.TEXT
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'surveyaanswers' });
    }
}

module.exports = SurveyAnswers;