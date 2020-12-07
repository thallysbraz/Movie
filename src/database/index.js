const mongoose = require("mongoose");
const Sequelize = require("sequelize");

const Movie = require("../api/models/Movie");
const models = [Movie];

class Database {
  constructor() {
    this.mongo();
    this.init();
  }

  init() {
    this.connect = new Sequelize({
      dialect: "postgres",
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
      },
    });

    models.map((model) => model.init(this.connect));
  }

  mongo() {
    this.mongoConnection = mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useCreateIndex: true,
        useFindAndModify: false,
      })
      .then(() => {
        console.log("conectado ao banco MONGODB");
      })
      .catch((err) => {
        console.log("error ao conectar no banco " + err);
      });
  }
}

module.exports = new Database();
