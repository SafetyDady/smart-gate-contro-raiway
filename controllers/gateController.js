const axios = require("axios");

const openGate = async (req, res) => {
  try {
    const piUrl = process.env.PI_BASE_URL + "/relay/relay1/on";
    const piResponse = await axios.get(piUrl);

    return res.status(200).json({
      message: "✅ Gate opened successfully",
      piResponse: piResponse.data,
    });
  } catch (error) {
    console.error("❌ Failed to open gate via Pi:", error.message);
    return res.status(500).json({ error: "Failed to open gate" });
  }
};

// ✅ เพิ่มฟังก์ชันทดสอบ
const testGate = (req, res) => {
  res.send("🧪 Gate test route working");
};

module.exports = { openGate, testGate };
