const express = require("express");
const gateRoutes = require("./routes/gateRoutes");

const app = express();

app.use("/gate", gateRoutes); // ✅ เสมอ

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
