var express = require("express");
var router = express.Router();
var axios = require("axios");
var userControl = require("../controllers/user/userControl.js");

router.post("/signUp/", userControl.register);
router.post("/login/", userControl.login);

module.exports = router;
