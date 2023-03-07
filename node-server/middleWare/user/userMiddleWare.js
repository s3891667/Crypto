//this file will contain authentification
//as well as email verfication
const User = require("../../models/user/userModel.js");
const nodemailer = require("nodemailer");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
app.use(cookieParser());

const userMiddleWare = {
  validateRegistration: async (req, res) => {
    const email = req.cookies.authcookie;
    console.log(req.cookies.authcookie);
    //  try {
    const vericode = req.body.vericode;
    console.log(vericode);
    if (!vericode) {
      return res.status(404).json("Empty verfication code");
    }
    //const user = await User.findOne({ username, email });
    //if (!user) res.status(404).json("User does not exist");
    //if (user.OTPCode !== vericode) {
    // TODO: Delete temporary user
    //await User.deleteOne();
    //res.status(404).json("Incorrect OTP");
    //}
    // Valid OTP !!!!

    //encrypt the password to protect the account
    //const encrypted_pass = await bcrypt.hash(password, 15);
    //const newUser = User.findOneAndUpdate({
    // {username, email},
    // {OTPCode: "", isVerified:true},
    //});

    //return res.status(200).json(newUser);
    //} catch (error) {
    //  console.log(error);
    // }
  },
  // Create a transporter object to send emails
  optCodesending: async (verificationCode, email) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_HOST_PASSWORD,
      },
    });

    //right here the user gonna receive the code from
    //there email after that we gonna ask them to input the code
    //and decided whether we create the account or not
    //once it is not confirmed for 5 minutes the program gonna return error

    // Set up the email message
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Account Verification Code",
      text: `Your verification code is: ${verificationCode}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  },
};

module.exports = userMiddleWare;
