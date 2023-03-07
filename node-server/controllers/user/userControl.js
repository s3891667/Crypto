const bcrypt = require("bcrypt");
const User = require("../../models/user/userModel.js");
const userMiddleWare = require("../../middleWare/user/userMiddleWare.js");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

/*userController object contains functions that is requested
by the users */
const userControl = {
  login: async (_req, res) => {
    // return res.cookie("authcookie", verificationCode, {
    //   secure: true,
    //   httpOnly: true,
    //   sameSite: "Strict",
    // });
    return res.json("You have succesfully logged in !");
  },
  register: async (req, res) => {
    const { email, username, password } = req.body;
    // Create cookie for client
    try {
      // Find user
      const existedUser = await User.findOne({ username, email });
      if (existedUser) {
        // If user exists, .....
        return res.json("the account have already existed ! ");
      }
      //sending the opt code to users' emails
      const verificationCode = Math.floor(100000 + Math.random() * 900000);
      await userMiddleWare.optCodesending(verificationCode, email);
      const temporaryUser = new User({
        username: username,
        email: email,
        password: password,
      });
      await temporaryUser.save();

      console.log(email);
      req.app.get("/cookies", (_req, res) => {
        const { email } = req.body;
        res.cookie("authcookie", email, {
          secure: true,
          httpOnly: true,
          sameSite: "Strict",
        });
        res.send("successed");
      });
    } catch (error) {
      console.log(error);
    }
  },
  validateRegistration: async (req, res) => {
    const { email, username, password } = req.body;
    try {
      const vericode = req.body.vericode;
      console.log(vericode);
      if (!vericode) {
        return res.status(404).json("Empty verfication code");
      }
      const user = await User.findOne({ username, email });
      if (!user) res.status(404).json("User does not exist");
      if (user.OTPCode !== vericode) {
        // TODO: Delete temporary user
        await User.deleteOne();
        res.status(404).json("Incorrect OTP");
      }
      // Valid OTP !!!!

      //encrypt the password to protect the account
      const encrypted_pass = await bcrypt.hash(password, 15);
      //const newUser = User.findOneAndUpdate({
      // {username, email},
      // {OTPCode: "", isVerified:true},
      //});

      //return res.status(200).json(newUser);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = userControl;
