// import models
const Location = require("./Inventory");
const Inventory = require("./Location");

// Products belongsTo Category
Inventory.belongsTo(Location, {
  foreignKey: "location_id",
  onDelete: "CASCADE",
});

// Products belongsTo Category
Location.hasMany(Inventory, {
  foreignKey: "location_id",
});

module.exports = {
  Location,
  Inventory,
};
