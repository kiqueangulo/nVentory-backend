'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductLocations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ ProductDetails, Locations }) {
      // define association here
      //product_details
      ProductLocations.belongsTo(ProductDetails, {
        foreignKey: { name: "product_id", field: "product_id" },
        as: "products"
      });

      //location
      ProductLocations.belongsTo(Locations, {
        foreignKey: { name: "location_id", field: "location_id" },
        as: "locations"
      });
    }
  }
  ProductLocations.init({
    product_location_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ProductLocations',
    tableName: 'ProductLocations',
    timestamps: false
  });
  return ProductLocations;
};