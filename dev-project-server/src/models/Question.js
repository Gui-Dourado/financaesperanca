const { Model, DataTypes } = require("sequelize")

class Question extends Model {
    static init(sequelize) {
        super.init({
            module_id: DataTypes.INTEGER,
            title: DataTypes.TEXT,
        }, {
            sequelize,
            timestamps: false
        });
    }

    static associate(models) {
        this.hasMany(models.Alternative, { as: 'alternative' });
        this.hasMany(models.Response, { foreignKey: 'question_id', as: 'responses' });
    }
}

module.exports = Question;