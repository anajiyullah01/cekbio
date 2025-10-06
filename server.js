// server.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("✅ Bot WhatsApp CEK BIO DIMZ aktif di Railway!");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("🌐 Keep-alive server aktif di port", process.env.PORT || 3000);
});
