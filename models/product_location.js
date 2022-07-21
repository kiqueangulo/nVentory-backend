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
    static associate({ product_details, location }) {
      // define association here
      //product_details
      product_location.belongsTo(product_details, {
        foreignKey: { name: "product_id", field: "product_id" }
      });

      //location
      product_location.belongsTo(location, {
        foreignKey: { name: "location_id", field: "location_id" }
      });
    }
  }
  product_location.init({
    product_location_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'product_location',
    tableName: 'product_location',
    timestamps: false
  });
  return product_location;
};