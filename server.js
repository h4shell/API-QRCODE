const config = {
  port: 16666,
};

const express = require("express");
const routeQr = require("./routes/routeQr");

const app = express();

app.use("/", routeQr);

app.listen(config.port, () => {
  console.log("Server Started");
});
