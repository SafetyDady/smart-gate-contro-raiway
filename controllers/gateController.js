const axios = require("axios");

// 🟢 ใช้ openGate แบบ mock ไม่เชื่อม Firebase
const openGate = async (req, res) => {
  try {
    const piUrl = process.env.PI_BASE_URL + "/relay/relay1/on";
    const piResponse = await axios.get(piUrl);

    return res.status(200).json({
      message: "✅ Gate open request (mocked)",
      piResponse: piResponse.data,
    });
  } catch (error) {
    console.error("❌ Failed to open gate (mock):", error.message);
    return res.status(500).json({ error: "Mock gate open failed" });
  }
};

// 🧪 route test
const testGate = (req, res) => {
  res.send("🧪 Gate test route working");
};

module.exports = { openGate, testGate };
