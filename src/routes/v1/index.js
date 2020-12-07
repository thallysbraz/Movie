const router = require("express").Router();
const { celebrate, errors } = require("celebrate");

const { store } = require("../../api/controllers/movie/MovieController");
const validate = require("../../config/handlers/middlewares/movimentValidator");

router.post("/movie/:id", celebrate({ body: validate }), store);
router.use(errors());

module.exports = router;
