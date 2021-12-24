const { Inventory } = require("../models");

const inventoryData = [
  {
    item: "T Shirt",
    location_id: "1",
    safety_stock: "200",
    reorder_point: "300",
    quantity_on_hand: "250",
  },
  {
    item: "Hoodie",
    location_id: "1",
    safety_stock: "500",
    reorder_point: "700",
    quantity_on_hand: "150",
  },
  {
    item: "Jeans",
    location_id: "1",
    safety_stock: "300",
    reorder_point: "600",
    quantity_on_hand: "100",
  },
  {
    item: "Sneakers",
    location_id: "1",
    safety_stock: "100",
    reorder_point: "200",
    quantity_on_hand: "10",
  },
  {
    item: "Socks",
    location_id: "1",
    safety_stock: "1000",
    reorder_point: "1500",
    quantity_on_hand: "250",
  },
  {
    item: "Chino",
    location_id: "1",
    safety_stock: "500",
    reorder_point: "1000",
    quantity_on_hand: "100",
  },
];

const seedInventory = () => Inventory.bulkCreate(inventoryData);

module.exports = seedInventory;
