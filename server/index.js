const express = require("express");
const morgan = require("morgan");
const parser = require("body-parser");
const model = require("../database/models");
const app = express();

app.get("/", function(req, res) {
  res.send("GooogooooGaggggaaa");
});

app.listen(3000, () =>
  console.log("###########listening on port 3000!############")
);
