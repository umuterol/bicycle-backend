const express = require("express");
const router = express.Router();
const Routes = require("./routers");

router.use("/bicycle", Routes.bicyleRoute);


module.exports = router;