const {
  calculateReorderPoint,
  calculateEconomicOrderQuantity,
} = require("./helpers/utils");

const test = calculateEconomicOrderQuantity(500, 10000, 0.75);

console.log(test);
