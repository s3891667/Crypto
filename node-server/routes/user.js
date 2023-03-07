var express = require("express");
var router = express.Router();
var axios = require("axios");
var userControl = require("../controllers/user/userControl.js");
var userMiddleWare = require("../middleWare/user/userMiddleWare.js");
//router.post("/signUp/", cookie.cookies_generator, userControl.register);
//router.get("/signUp/cookie", cookie.cookies_generator, userControl.register);
//add the second function
router.post("/signUp/", userControl.register);
router.post("/signUp/Email/", userMiddleWare.validateRegistration);
router.post("/login/", userControl.login);

module.exports = router;
