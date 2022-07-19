'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ product_details, locations }) {
      // define association here
      //product_details
      product_location.belongsTo(product_details, {
        foreignKey: "product_id",
        as: "product_id"
      });

      //location
      product_location.belongsTo(locations, {
        foreignKey: "location_id",
        as: "location_id"
      });
    }
  }
  product_location.init({
    location_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product_location',
  });
  return product_location;
};