require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const profile = {
  name: "Aditya",
  link: "https://github.com/adityabisht02",
  profilepic: "https://avatars.githubusercontent.com/u/89146189?v=4",
};
app.get("/", function (req, res) {
  res.render("index", profile);
});
app.get("/resume", function (req, res) {
  res.render("resume1", profile);
});

app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
