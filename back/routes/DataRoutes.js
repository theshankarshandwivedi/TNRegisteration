const express = require("express");
const router = express.Router();

const { dataController } = require("../controller/form");

router.post("/register", dataController);

module.exports = router;