const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Location extends Model {}

Location.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    location_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "No Location Assigned",
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: "location",
  }
);

module.exports = Location;
