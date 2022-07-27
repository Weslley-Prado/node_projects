// import the modules express, consign, body-parser and express-validator, read the file README.md

var express = require("express");
var consign = require("consign");
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");

//Initializing and set the vars 'view engine and viwes' of express'.
var app = express();
app.set("view engine", "ejs");
app.set("views", "./app/views");

//Configure the middleware express.static, body-parser and express-validator

app.use(express.static("./app/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); //express-validator

//The consign accomplish the autoload of the routes
consign()
      .include("app/routes")
      .then("app/models")
      .into(app);

module.exports = app;
