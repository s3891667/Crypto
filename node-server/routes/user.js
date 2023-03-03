var express = require("express");
var router = express.Router();
var axios = require("axios");
var userControl = require("../controllers/user/userControl.js");
var userMiddleWare = require("../middleWare/user/userMiddleWare.js");

router.post("/login/", userControl.login);
router.post("/signUp/", userControl.register);
router.post("/signUp/Email/", userMiddleWare.verification);

module.exports = router;
