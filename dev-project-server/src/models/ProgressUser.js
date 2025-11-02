const { Model, DataTypes } = require("sequelize")

class ProgressUser extends Model {
    static init(sequelize) {
        super.init({
            user_id: DataTypes.INTEGER,
            module1_video: DataTypes.BOOLEAN,
            module1_questionnaire: DataTypes.BOOLEAN,
            module2_video: DataTypes.BOOLEAN,
            module2_questionnaire: DataTypes.BOOLEAN,
            module3_video: DataTypes.BOOLEAN,
            module3_questionnaire: DataTypes.BOOLEAN,
            survey_answers: DataTypes.BOOLEAN
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'userProgress' });
    }
}

module.exports = ProgressUser;