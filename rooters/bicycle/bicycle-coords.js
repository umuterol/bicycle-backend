const express = require("express");
const router = express.Router();
const bicycleController = require("../../controllers/bicycle");

router.get("", bicycleController.coords.getData);
router.post("/create", bicycleController.coords.create);

module.exports = router;