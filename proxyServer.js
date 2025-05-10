// 🌐 Proxy ทุก request ที่ขึ้นต้นด้วย /gate ไปยัง Pi ผ่าน ZeroTier
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/gate",
  createProxyMiddleware({
    target: "http://172.28.49.126:5000", // 🔁 IP Pi (ZeroTier)
    changeOrigin: true,
    pathRewrite: {
      "^/gate": "", // ลบ "/gate" ก่อนส่งไปยัง Pi
    },
  })
);

// 🚀 Start proxy server บน port 3000
app.listen(3000, () => {
  console.log("🛡️ Proxy server ready on port 3000");
});
