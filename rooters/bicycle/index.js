const express = require("express");
const router = express.Router();

//Route
const bicycleRoute = require("./bicycle");
const bicyleCoordsRoute = require("./bicycle-coords");


router.use("/coords", bicyleCoordsRoute);
router.use("", bicycleRoute);


module.exports = router;