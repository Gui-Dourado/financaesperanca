const { Model, DataTypes } = require("sequelize")

class Comment extends Model {
    static init(sequelize) {
        super.init({
            user_id: DataTypes.INTEGER,
            module_id: DataTypes.INTEGER,
            content: DataTypes.TEXT,
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'comments' });
        this.belongsTo(models.Module, { foreignKey: 'module_id', as: 'module' });
    }
}

module.exports = Comment;