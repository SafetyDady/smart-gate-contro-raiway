const openGate = async (req, res) => {
  try {
    const piUrl = process.env.PI_BASE_URL + "/relay/relay1/on";
    console.log("➡️ Sending request to PI:", piUrl);

    const piResponse = await axios.get(piUrl);
    console.log("✅ PI responded with:", piResponse.data);

    return res.status(200).json({
      message: "✅ Gate open request (mocked)",
      piResponse: piResponse.data,
    });
  } catch (error) {
    console.error("❌ Failed to reach Pi:", error.message);
    return res.status(500).json({ error: "Mock gate open failed" });
  }
};
