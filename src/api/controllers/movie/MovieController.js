const axios = require("axios");

class MovieController {
  async list(req, res) {
    try {
      const { id } = req.params;
      const endPoint = `${process.env.ENDPOINT}/${id}?api_key=${process.env.API_KEY}`;
      await axios
        .get(endPoint)
        .then((sucess) => {
          const { original_language, original_title, homepage } = sucess.data;
          return res.json({ original_language, original_title, homepage });
        })
        .catch((err) => {
          console.log("error");
        });
    } catch (error) {
      console.log(error);
      return res.json({ msg: "Houve falha interna" });
    }
  }

  async store(req, res) {
    try {
      const { id } = req.params;
      const endPoint = `${process.env.ENDPOINT}/${id}?api_key=${process.env.API_KEY}`;
      await axios
        .get(endPoint)
        .then(async (sucess) => {
          const { original_title, status } = sucess.data;

          const values = [id, original_title, status];
          console.log(values);

          return res.json({ original_title, homepage });
        })
        .catch((err) => {
          console.log(err);
          console.log("error");
        });
    } catch (error) {
      console.log(error);
      return res.json({ msg: "Houve falha interna" });
    }
  }
}

module.exports = new MovieController();
