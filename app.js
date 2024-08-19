const express = require("express");
const dotenv = require("dotenv");
dotenv.config({
  path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env.dev",
});
const db = require("./models");
const router = require("./routes");
const app = express();
app.use(express.json({ limit: "10mb", extended: true }));

db.then((info) => {
  console.log("db is connected");
}).catch((err) => console.log(err, "database connection failed!"));
app.use("/", router);
app.listen(3001, () => {
  console.log("app is runnug");
});
