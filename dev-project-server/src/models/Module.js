const { Model, DataTypes } = require("sequelize")

class Module extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            url_video: DataTypes.TEXT,
            questionnaire_title: DataTypes.STRING
        }, {
            sequelize,
            timestamps: false
        });
    }

    static associate(models) {
        this.hasMany(models.Comment, { foreignKey: 'module_id', as: 'comments' });
    }
}

module.exports = Module;