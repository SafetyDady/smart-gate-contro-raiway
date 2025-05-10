const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/gate",
  createProxyMiddleware({
    target: "http://<ZEROTIER_PI_IP>:5000", // 👈 เปลี่ยนเป็น IP ของ Pi จริง
    changeOrigin: true,
    pathRewrite: {
      "^/gate": "/gate", // ไม่เปลี่ยน path
    },
  })
);

app.listen(3000, () => {
  console.log("🚀 Proxy server ready on port 3000");
});
