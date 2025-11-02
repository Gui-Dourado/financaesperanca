const { Model, DataTypes } = require("sequelize")

class Response extends Model {
    static init(sequelize) {
        super.init({
            user_id: DataTypes.INTEGER,
            question_id: DataTypes.INTEGER,
            alternative_id: DataTypes.INTEGER
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
        this.belongsTo(models.Question, { foreignKey: 'question_id', as: 'question' });
        this.belongsTo(models.Alternative, { foreignKey: 'alternative_id', as: 'alternative' });
    }
}

module.exports = Response;