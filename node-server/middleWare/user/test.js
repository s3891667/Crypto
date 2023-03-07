const express = require("express");
const app = express();
app.use(cookieParser());

const cookies = {
  validateCookie: async (req, res, next) => {
    // Create cookie
    // Generate a random verification code
    if (!req.cookies) next();

    
    console.log(verificationCode);
    res.json(verificationCode);
    
  },
};

module.exports = cookies;
