'use strict';

// @type {import('sequelize-cli').Migration}
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('questions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      module_id: {
        type: Sequelize.INTEGER,
        references: { model: 'modules', key: 'id' },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      title: {
        type: Sequelize.TEXT,
        allowNull: false
      }
    });

    await queryInterface.bulkInsert('questions', [
      {
        module_id: 1,
        title: 'Questão 1: Qual é o principal objetivo do método 50/30/20?'
      },
      {
        module_id: 1,
        title: 'Questão 2: O que são considerados “gastos invisíveis”, segundo o módulo?'
      },
      {
        module_id: 1,
        title: 'Questão 3: A reserva de emergência ideal deve corresponder a:'
      },
      {
        module_id: 2,
        title: 'Questão 1: O que caracteriza uma cláusula abusiva em um contrato?'
      },
      {
        module_id: 2,
        title: 'Questão 2: Segundo o módulo, qual é a regra de ouro antes de assinar um contrato?'
      },
      {
        module_id: 2,
        title: 'Questão 3: A prática conhecida como “venda casada” é:'
      },
      {
        module_id: 3,
        title: 'Questão 1: Como se prevenir de riscos ao investir em ações?'
      },
      {
        module_id: 3,
        title: 'Questão 2: Qual é uma estratégia eficaz para se proteger de golpes em investimentos financeiros?'
      },
      {
        module_id: 3,
        title: 'Questão 3: A “volatilidade extrema” é uma armadilha comumente associada a qual tipo de investimento?'
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('questions', null, {});

    await queryInterface.dropTable('questions');
  }
};