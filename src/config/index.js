const express = require("express");
const routes = require("../routes/index");

const cors = require("cors");

class ServerController {
  constructor() {
    this.express = express();
    this.routes();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }
}

module.exports = new ServerController().express;
