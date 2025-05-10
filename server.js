require("dotenv").config();
const express = require("express");
const app = express();

// ✅ เพิ่มเส้นทาง
const gateRoutes = require("./routes/gateRoutes");
app.use("/gate", gateRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running...");
});
