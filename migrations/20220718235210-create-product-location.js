'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('product_locations', {
      product_location_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('product_locations');
  }
};