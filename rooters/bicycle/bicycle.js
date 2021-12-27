const express = require("express");
const router = express.Router();
const bicycleController = require("../../controllers/bicycle");

router.post("/create", bicycleController.create);
router.get("",bicycleController.getData);

module.exports = router;