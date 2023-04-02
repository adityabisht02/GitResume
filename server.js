require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const axios = require("axios");
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//object to store user profile data from api
var githubprofile = {};
//object to store starred repo data from api
var githubstarred = {};

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/", function (req, res) {
  const username = req.body.username;
  const url = "https://api.github.com/users/" + username;
  const repourl = "https://api.github.com/users/" + username + "/starred";

  axios
    .get(url)
    .then(function (response) {
      // handle success
      githubprofile = response.data;
    })
    .then(function () {
      axios.get(repourl).then(function (resp) {
        githubstarred = resp.data;
        res.render("resume1", {
          profile: githubprofile,
          starred: githubstarred,
        });
      });
    });

  // res.render("resume1", { profile: profile, starred: starred });
});

app.get("/portfolio", function (req, res) {
  res.render("portfolio1", { profile: githubprofile, starred: githubstarred });
});

app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
