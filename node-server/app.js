const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
require("dotenv").config();
//connect MongoDB server
require("./models/user/userModel.js");
require("./database/db.js");
// deploy : render.com , microsoft Azure
// render : unlimitted
// azure : manh
// for front-end deploy we should use vercel
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);

// Ông dùng dotenv nên có thể bỏ phần port vào trong file .env
// vì sau này deploy sẽ phải xài default port của cloud nên sẽ cần phải sửa lại.
// Để trong .env sẽ cho ông overwrite lại port mà ông muốn dùng.
const port = process.env.PORT;
app.listen(port, function () {
  console.log(`The app is running on port ${port} `);
});
module.exports = app;
