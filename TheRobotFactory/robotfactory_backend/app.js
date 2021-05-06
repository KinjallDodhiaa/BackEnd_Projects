var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

/**
 * DEPENDENCIES FROM LOWDB
 */
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

/**
 * SET UP THE LOWDB DATABASE
 */
//initialize the adapter to the mock db file
const adapter = new FileSync("data/db.json");
//initialize the lowdb to the mock db file
const db = low(adapter);
//add default entries to the database
db.defaults({
  robots: [],
}).write();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var robotRouter = require("./routes/robots")

const { setCors } = require("./middleware/security");


var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(setCors);

/** ERROR HANDLING */
app.use((err,req,res,next)=> {
  //respond to the rquestor with the error message
  res.status(500).send({
    error: {
      message: err.message
    }
  })
})


app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/robots",robotRouter);

module.exports = app;

