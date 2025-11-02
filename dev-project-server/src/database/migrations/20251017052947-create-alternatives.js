'use strict';

// @type {import('sequelize-cli').Migration}
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('alternatives', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      question_id: {
        type: Sequelize.INTEGER,
        references: { model: 'questions', key: 'id' },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      is_correct: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    });

    await queryInterface.bulkInsert('alternatives', [
      {
        question_id: 1,
        description: 'Definir metas de investimento em renda variável.',
        is_correct: false
      },
      {
        question_id: 1,
        description: 'Ensinar formas de gastar menos com lazer.',
        is_correct: false
      },
      {
        question_id: 1,
        description: 'Organizar o orçamento em necessidades, desejos e planejamento do futuro.',
        is_correct: true
      },
      {
        question_id: 1,
        description: 'Impedir o uso do cartão de crédito.',
        is_correct: false
      },
      {
        question_id: 2,
        description: 'Despesas com aluguel e alimentação.',
        is_correct: false
      },
      {
        question_id: 2,
        description: 'Compras grandes e planejadas.',
        is_correct: false
      },
      {
        question_id: 2,
        description: 'Pequenos gastos do dia a dia que, somados, representam um valor significativo.',
        is_correct: true
      },
      {
        question_id: 2,
        description: 'Investimentos e aplicações financeiras.',
        is_correct: false
      },
      {
        question_id: 3,
        description: '1 mês de salário.',
        is_correct: false
      },
      {
        question_id: 3,
        description: 'De 3 a 6 meses dos gastos fixos.',
        is_correct: true
      },
      {
        question_id: 3,
        description: 'O dobro do salário mensal.',
        is_correct: false
      },
      {
        question_id: 3,
        description: '10% da renda anual.',
        is_correct: false
      },
      {
        question_id: 4,
        description: 'Uma cláusula escrita em letras grandes.',
        is_correct: false
      },
      {
        question_id: 4,
        description: 'Uma cláusula que beneficia apenas o consumidor.',
        is_correct: false
      },
      {
        question_id: 4,
        description: 'Uma cláusula que concede vantagens excessivas à empresa ou fornecedor.',
        is_correct: true
      },
      {
        question_id: 4,
        description: 'Uma cláusula que prevê reajuste anual.',
        is_correct: false
      },
      {
        question_id: 5,
        description: 'Confiar na palavra do vendedor.',
        is_correct: false
      },
      {
        question_id: 5,
        description: 'Assinar apenas se o valor for baixo.',
        is_correct: false
      },
      {
        question_id: 5,
        description: 'Não assinar se não compreender completamente o conteúdo.',
        is_correct: true
      },
      {
        question_id: 5,
        description: 'Pedir desconto antes de ler o contrato.',
        is_correct: false
      },
      {
        question_id: 6,
        description: 'Permitida em casos de fidelidade contratual.',
        is_correct: false
      },
      {
        question_id: 6,
        description: 'Proibida, pois obriga o consumidor a adquirir um produto ou serviço que não deseja.',
        is_correct: true
      },
      {
        question_id: 6,
        description: 'Aceita apenas em contratos digitais.',
        is_correct: false
      },
      {
        question_id: 6,
        description: 'Uma estratégia de marketing legalizada.',
        is_correct: false
      },
      {
        question_id: 7,
        description: 'Aplicando todo o capital em empresas do mesmo setor.',
        is_correct: false
      },
      {
        question_id: 7,
        description: 'Comprando ações que estejam em alta no dia para garantir lucro.',
        is_correct: false
      },
      {
        question_id: 7,
        description: 'Diversificando os investimentos entre diferentes setores e empresas.',
        is_correct: true
      },
      {
        question_id: 7,
        description: 'Apostando apenas em ações que estejam em baixa para buscar maior retorno.',
        is_correct: false
      },
      {
        question_id: 8,
        description: 'Contratar um assessor financeiro para cuidar de todo o dinheiro.',
        is_correct: false
      },
      {
        question_id: 8,
        description: 'Desconfiar de promessas de lucro rápido ou garantido.',
        is_correct: true
      },
      {
        question_id: 8,
        description: 'Investir apenas com base em experiências pessoais.',
        is_correct: false
      },
      {
        question_id: 8,
        description: 'Aplicar exclusivamente em renda fixa.',
        is_correct: false
      },
      {
        question_id: 9,
        description: 'Criptoativos.',
        is_correct: true
      },
      {
        question_id: 9,
        description: 'Tesouro Direto.',
        is_correct: false
      },
      {
        question_id: 9,
        description: 'Debêntures.',
        is_correct: false
      },
      {
        question_id: 9,
        description: 'Certificados de Operações Estruturadas (COE).',
        is_correct: false
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('alternatives', null, {});

    await queryInterface.dropTable('alternatives');
  }
};