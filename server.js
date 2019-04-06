// Get the dependencies
const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();

var cookieParser = require("cookie-parser");
var session = require("express-session");
app.use(cookieParser());
// app.use(session({secret: process.env.SESSION_SECRET}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, "dist/webdev-jianqiao-han")));

// CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const port = process.env.PORT || "3200";
app.set("port", port);

// Create HTTP server
const server = http.createServer(app);
server.listen(port, () => console.log("Running on port 3200"));

// link to database from local or cloud
// var connectionString = "mongodb://127.0.0.1:27017/webdev";
var connectionString = "mongodb://<heroku_wr6gm95z>:<7qeMXk9fetWdH.Z>@ds133086.mlab.com:33086/heroku_wr6gm95z";

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const client = mongoose.connect(connectionString, {useNewUrlParser: true});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

require("./assignment/app")(app);
