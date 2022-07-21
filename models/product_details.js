'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product_details.init({
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
    type: DataTypes.STRING,
    allowNull: false
  },
    brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
    quantity: {
    type: DataTypes.INTEGER,
    allowNull:false
  }, 
    price: {
    type: DataTypes.DECIMAL,
    allowNull: false
    }
  }, {
    sequelize,
    modelName: 'product_details',
    tableName: 'product_details'
  });
  return product_details;
};