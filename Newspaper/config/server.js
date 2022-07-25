/*
  In this code, 
*/

import express from "express";
import consign from "consign";
import bodyParser from "body-pareser";
import expressValidator from "express-validator";

const app = express();
app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

consign()
  .include("app/routes")
  .then("config/dbConnection.js")
  .then("app/models")
  .then("app/controllers")
  .into(app);

export default app;
