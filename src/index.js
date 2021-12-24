const {
  calculateReorderPoint,
  calculateEconomicOrderQuantity,
} = require("./helpers/utils");

const { inventoryData } = require("./sample-data/inventory-sample");

const average_usage = inventoryData[1].average_usage;
const lead_time = inventoryData[1].lead_time;
const safety_stock = inventoryData[1].safety_stock;

const results = calculateReorderPoint(average_usage, lead_time, safety_stock);

console.log(results);
