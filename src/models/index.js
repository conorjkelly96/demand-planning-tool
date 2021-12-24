// import models
const Location = require("./Inventory");
const Inventory = require("./Location");

// Products belongsTo Category
Inventory.belongsToMany(Location, {
  foreignKey: "location_id",
  onDelete: "CASCADE",
});

// Categories have many Products
Location.hasMany(Inventory, {
  foreignKey: "location_id",
});

module.exports = {
  Location,
  Inventory,
};
