class MovieController {
  async store(req, res) {
    const { id } = req.params;
    return res.json({ msg: "ok, true", id });
  }
}

module.exports = new MovieController();
