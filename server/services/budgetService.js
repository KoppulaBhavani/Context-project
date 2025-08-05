function getAllowedBudget(cycleRevenue) {
  return Math.min(cycleRevenue * 0.33, 10000);
}

module.exports = { getAllowedBudget };
