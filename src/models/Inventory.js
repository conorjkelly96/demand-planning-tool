const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Inventory extends Model {}

Inventory.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    item: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    safety_stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reorder_point: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity_on_hand: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: "Inventory",
  }
);

module.exports = Inventory;
