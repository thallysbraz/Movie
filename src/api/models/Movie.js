const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class Movie extends Model {
  static init(sequelize) {
    super.init(
      {
        id_movie: Sequelize.STRING,
        original_title: Sequelize.STRING,
        status: Sequelize.STRING,
      },
      { sequelize }
    );
    return this;
  }
}
module.exports = new Movie();
