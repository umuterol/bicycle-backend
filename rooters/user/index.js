const express = require("express");
const router = express.Router();

//Route
const identityRoute = require("./identity");

router.use("/identity", identityRoute);


module.exports = router;