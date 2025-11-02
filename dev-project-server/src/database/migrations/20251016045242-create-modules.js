'use strict';

// @type {import('sequelize-cli').Migration}
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('modules', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      url_video: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      questionnaire_title: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });

    await queryInterface.bulkInsert('modules', [
      {
        title: 'Módulo 1 - Organização Financeira',
        url_video: 'https://youtube.com/embed/ftOwoMQLETM',
        questionnaire_title: 'Módulo 1 - Questionário'
      },
      {
        title: 'Módulo 2 - Armadilhas em Contratos',
        url_video: 'https://youtube.com/embed/HAfXHRqOUVw',
        questionnaire_title: 'Módulo 2 - Questionário'
      },
      {
        title: 'Módulo 3 - Armadilhas em Instrumentos Financeiros',
        url_video: 'https://youtube.com/embed/CaZn9vNbBGI',
        questionnaire_title: 'Módulo 3 - Questionário'
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('modules', null, {});

    await queryInterface.dropTable('modules');
  },
};