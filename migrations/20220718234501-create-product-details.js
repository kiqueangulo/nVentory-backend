'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('product_details', {
      product_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false
        }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('product_details');
  }
};