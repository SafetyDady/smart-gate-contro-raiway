const express = require("express");
const router = express.Router();
const { openGate } = require("../controllers/gateController");

router.get("/open", openGate);

module.exports = router;
