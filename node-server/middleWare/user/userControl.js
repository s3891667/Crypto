var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var app = express();

/*userController object contains functions that is requested
by the users */
const userControl = {
  login: async (req, res) => {
    return res.json("You have succesfully logged in !");
  },
  register: async (req, res) => {
    const { email, username, password, repassword } = req.body;
    return res.json("hello");
  },
};

module.exports = userControl;
