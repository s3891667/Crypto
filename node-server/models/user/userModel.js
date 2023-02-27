const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  // Cái này là mặc định nên không cần declare
  // _id: {
  //   type: mongoose.Types.ObjectId,
  //   default: mongoose.Types.ObjectId,
  // },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema, "Crypt-users");

module.exports = User;
