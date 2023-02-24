var User = require("../../models/user/userModel.js");

/*userController object contains functions that is requested
by the users */
const userControl = {
  login: async (req, res) => {
    return res.json("You have succesfully logged in !");
  },
  register: async (req, res) => {
    const { email, username, password, repassword } = req.body;
    const newUser = new User({
      username: username,
      email: email,
      password: password,
    });
    newUser.save();

    return res.json("hello");
  },
};

module.exports = userControl;
