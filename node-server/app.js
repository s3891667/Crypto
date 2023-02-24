var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var axios = require("axios");
var adminRouter = require("./routes/admin");
var userRouter = require("./routes/user");
var testing = require("./middleWare/user/userControl");
//connect MongoDB server
require("./models/user/userModel.js");
require("./database/db.js");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);

const port = "5000";
app.listen(port, function () {
  console.log(`The app is running on port ${port} `);
});
module.exports = app;
