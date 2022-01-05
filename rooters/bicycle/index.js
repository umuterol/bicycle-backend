const express = require("express");
const router = express.Router();

//Route
const bicycleRoute = require("./bicycle");
const bicyleCoordsRoute = require("./bicycle-coords");
const bicycleStatusTypeRoute = require("./bicycle-status-type");


router.use("/coords", bicyleCoordsRoute);
router.use("/status-type", bicycleStatusTypeRoute);
router.use("", bicycleRoute);


module.exports = router;