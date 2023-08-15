const express = require("express");
const router = express.Router();
const Qr = require("../modules/createQr");


router.get("/base64", async (req, res) => {
  const userData = req.query;
  const qrBase64 = await new Qr(userData);

  qrBase64 == false
    ? res.status(400).json({ error: "Error while generating QR code" })
    : res
        .status(200)
        .json({ status: true, qr: await qrBase64.generateBase64() });
});

router.get("/img", async (req, res) => {
  const userData = req.query;
  const qrImg = await new Qr(userData);

  if (qrImg == false) {
    res.status(400).json({ error: "Error while generating QR code" });
    return;
  } else {
    await res.writeHead(200, {
      "Content-type": "image/png",
      "Content-Length": qrImg,
    });
    res.end(await qrImg.generateImg());
    return;
  }
});

module.exports = router;
