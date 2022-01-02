const express = require("express");
const router = express.Router();
const Routes = require("./routers");

router.use("/bicycle", Routes.bicyleRoute);
router.use("/sms",Routes.smsRoute);


module.exports = router;