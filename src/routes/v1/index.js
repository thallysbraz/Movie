const router = require("express").Router();
const { celebrate, errors } = require("celebrate");

const { store, list } = require("../../api/controllers/movie/MovieController");
const validate = require("../../config/handlers/middlewares/movimentValidator");

router.post("/movie/:id", store);
router.get("/movie/:id", list);
router.use(errors());

module.exports = router;
