class MovieController {
  async store(req, res) {
    return res.json({ msg: "ok, true" });
  }
}

module.exports = new MovieController();
