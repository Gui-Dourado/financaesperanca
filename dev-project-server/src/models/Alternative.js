const { Model, DataTypes } = require("sequelize")

class Alternative extends Model {
    static init(sequelize) {
        super.init({
            question_id: DataTypes.INTEGER,
            description: DataTypes.TEXT,
            is_correct: DataTypes.BOOLEAN
        }, {
            sequelize,
            timestamps: false
        });
    }

    static associate(models) {
        this.belongsTo(models.Question, { foreignKey: 'question_id', as: 'alternative' });
        this.hasMany(models.Response, { foreignKey: 'alternative_id', as: 'responses' });
    }
}

module.exports = Alternative;