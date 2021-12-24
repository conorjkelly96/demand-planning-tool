// A reorder point (ROP) is a specific level at which your stock needs to be replenished. In other words, it tells you when to place an order so you won't run out of stock
const calculateReorderPoint = (average_usage, lead_time, safety_stock) => {
  return average_usage * lead_time + safety_stock;
};

// Economic Order Quantity, also known as Economic Purchase Quantity, is the order quantity that minimizes the total holding costs and ordering costs in inventory management.
const calculateEconomicOrderQuantity = (setupCosts, demandRate, holdingCPU) => {
  const rawEoq = Math.sqrt((2 * setupCosts * demandRate) / holdingCPU);
  return Math.round(rawEoq);
};

module.exports = {
  calculateReorderPoint,
  calculateEconomicOrderQuantity,
};
