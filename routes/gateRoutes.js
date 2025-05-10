const express = require("express");
const router = express.Router();
const { openGate, testGate } = require("../controllers/gateController");

router.get("/open", openGate);
router.get("/test", testGate); // ✅ สำหรับ health check

module.exports = router;
