const mongoose = require("mongoose");

// Connect to the MongoDB database
require("dotenv").config();
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to MongoDB");
});
