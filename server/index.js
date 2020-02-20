const express = require("express");
const morgan = require("morgan");
const parser = require("body-parser");
const routes = require("./routes");
const app = express();

app.use(morgan("dev"));
app.use(parser.json());

app.use("/products", routes);

app.listen(3000, () =>
  console.log("###########listening on port 3000!############")
);
