const express = require("express");
const router = express.Router();

router.get("/check", (req, res) => {
  const revenue = parseFloat(req.query.revenue);
  if (isNaN(revenue)) return res.status(400).json({ error: "Invalid revenue" });

  const allowedBudget = Math.min(revenue * 0.33, 10000);
  res.json({ allowedBudget });
});

module.exports = router;
