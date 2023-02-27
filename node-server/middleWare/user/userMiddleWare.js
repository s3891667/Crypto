//this file will contain authentification
//as well as email verfication
const nodemailer = require("nodemailer");
require("dotenv").config();

const userMiddleWare = {
  // Create a transporter object to send emails
  verification: async (req, res) => {
    console.log(req.body.email);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_HOST_PASSWORD,
      },
    });

    // Generate a random verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000);
    //right here the user gonna receive the code from
    //there email after that we gonna ask them to input the code
    //and decided whether we create the account or not
    //once it is not confirmed for 5 minutes the program gonna return error

    // Set up the email message
    const mailOptions = {
      from: process.env.EMAIL,
      to: req.body.email,
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
