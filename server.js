const config = {
  port: 16666,
};

const express = require("express");
const routeQr = require("./routes/routeQr");

const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .send('<script>window.location.href ="/img?text=www.google.it"</script>');
});

app.use("/", routeQr);

app.listen(config.port, () => {
  console.log("Server Started");
});
