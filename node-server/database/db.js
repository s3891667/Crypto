const mongoose = require("mongoose");

// Connect to the MongoDB database
require("dotenv").config();
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, { dbname: "Crypto" }, () => {
  console.log("MongoDB connected !");
});
