'use strict';

// @type {import('sequelize-cli').Migration}
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('progress_users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      module1_video: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      module1_questionnaire: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      module2_video: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      module2_questionnaire: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      module3_video: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      module3_questionnaire: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      survey_answers: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('progress_users');
  }
};