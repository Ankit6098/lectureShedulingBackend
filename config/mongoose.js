/* eslint-disable no-console */
const mongoose = require("mongoose");
require("dotenv").config();

// connection to the db
mongoose.connect(process.env.mongoUrl);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
