'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Locations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Locations.init({
    location_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    sections: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shelf_letter: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shelf_div: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Locations',
    tableName: 'locations',
    timestamps: false
  });
  return Locations;
};