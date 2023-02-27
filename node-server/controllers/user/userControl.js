const bcrypt = require("bcrypt");
const User = require("../../models/user/userModel.js");
const userMiddleWare = require("../../middleWare/user/userMiddleWare.js");

/*userController object contains functions that is requested
by the users */
const userControl = {
  login: async (_req, res) => {
    return res.json("You have succesfully logged in !");
  },
  register: async (req, res) => {
    const { email, username, password, repassword } = req.body;

    try {
      //if pass not match
      if (password != repassword) {
        return res.json("The password are not matched !");
      }
      //if account existed
      else if (await User.findOne({ username, email })) {
        return res.json("the account have already existed ! ");
      } else {
        //encrypt the password to protect the account
        const encrypted_pass = await bcrypt.hash(password, 15);
        const newUser = new User({
          username: username,
          email: email,
          password: encrypted_pass,
        });

        await userMiddleWare.verification(req, res);
        //after verified then continue
        await newUser.save();
        return res.json("Please check email for account verification !");
      }
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = userControl;
