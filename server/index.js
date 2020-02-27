const express = require("express");
const morgan = require("morgan");
const parser = require("body-parser");
const routes = require("./routes");
const cluster = require("cluster");
const os = require("os");
// const app = express();

if (cluster.isMaster) {
  const cpuCount = os.cpus().length;
  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }
} else {
  const app = express();
  // app.use(morgan("dev"));
  app.use(parser.json());

  app.use("/products", routes);

  app.listen(3000, () =>
    console.log("###########listening on port 3000!############")
  );
}

cluster.on("exit", worker => {
  console.log("worker ", worker.id, " is no more");
  cluster.fork();
});
