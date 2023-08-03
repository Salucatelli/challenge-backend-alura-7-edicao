'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('destinos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { len: [0, 32] }
      },
      meta: {
        type: Sequelize.STRING,
        alllowNull: false,
        validate: { len: [0, 160] }
      },
      texto_descritivo: {
        type: Sequelize.STRING,
        alllowNull: true
      },
      img1: {
        type: Sequelize.STRING,
        allowNull: false
      },
      img2: {
        type: Sequelize.STRING,
        allowNull: false
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

    await queryInterface.dropTable('destinos');

  }
};
