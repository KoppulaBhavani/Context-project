const express = require("express");
const cors = require("cors");

const budgetRoutes = require("./routes/budget");
const notifyRoutes = require("./routes/notify");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/budget", budgetRoutes);
app.use("/api/notify", notifyRoutes);

const notifyRoutes = require('./routes/notify');
app.use('/api/notify', notifyRoutes);


app.listen(5000, () => console.log("✅ Server running on port 5000"));
