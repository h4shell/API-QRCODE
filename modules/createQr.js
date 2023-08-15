const qr = require("qrcode");
const path = require("path");
const fs = require("fs");

class Qr {
  constructor(userData = {}) {
    if (userData.size) {
      if (parseInt(userData.size) > 1000) {
        userData.size = 1000;
      } else {
        userData.size = parseInt(userData.size);
      }
      if (parseInt(userData.size) < 10) {
        userData.size = 10;
      }
    }

    this.userData = {};
    this.userData.size = userData.size || 150;
    this.userData.text = userData.text || "www.google.it";
    this.userData.foregroundColor = userData.foregroundcolor;
    this.userData.backgroundColor = userData.backgroundcolor;
    this.options = {
      errorCorrectionLevel: "H",
      type: "image/png",
      quality: 1,
      margin: 1,
      width: this.userData.size,
      color: {
        dark:
          this.userData.foregroundColor == undefined
            ? "#000000"
            : "#" + userData.foregroundcolor, // Colore verde (formato esadecimale)
        light:
          this.userData.backgroundColor == undefined
            ? "#FFFFFF"
            : "#" + this.userData.backgroundcolor, // Colore sfondo (trasparente)
      },
    };
  }

  generateBase64() {
    return new Promise((resolve, reject) => {
      qr.toDataURL(this.userData.text, this.options, (err, qrDataURL) => {
        if (err) {
          console.log("< ✘ generateBase64 >");
          reject(false);
        } else {
          const qrImageName = "../qrcode.png";
          const qrImagePath = path.join(__dirname, qrImageName);
          const qrImageBuffer = Buffer.from(qrDataURL.split(",")[1], "base64");
          fs.writeFileSync(qrImagePath, qrImageBuffer);
          fs.unlinkSync(qrImagePath);

          console.log("< ✔ generateBase64 >");
          resolve(qrDataURL);
        }
      });
    });
  }

  generateImg() {
    return new Promise((resolve, reject) => {
      qr.toBuffer(this.userData.text, this.options, (err, qrBuffer) => {
        if (err) {
          console.log("< ✘ generateImg >");
          reject(false);
        } else {
          const qrImageName = "../qrcode.png";
          const qrImagePath = path.join(__dirname, qrImageName);
          fs.writeFileSync(qrImagePath, qrBuffer);
          fs.unlinkSync(qrImagePath);

          console.log("< ✔ generateImg >");
          resolve(qrBuffer);
        }
      });
    });
  }
}

module.exports = Qr;
