import express = require("express");
import {catProd, catService, config} from "./../config";

export const app = express();

// config.settings.port = 45678;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/config", (req, res) => {
  res.send(config);
});

app.listen(3000, () => {
  catProd.info("Example app listening on port 3000!");

});
