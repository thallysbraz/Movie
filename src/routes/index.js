const routerV1 = require("./v1/");
const router = require("express").Router();

router.use("/api/v1", routerV1);

module.exports = router;
