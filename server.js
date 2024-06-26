const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// const dotenv = require("dotenv");
require("dotenv").config();
const { readdirSync } = require("fs");
const connectDb = require("./config/db");

const app = express();

connectDb();

//middle ware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "20mb" }));
app.use(cors());

//Route
//localhost:4001/api/
//#1
// app.use("/api", require("./routes/api"));

// sample
app.get("/api/test", (req, res) => {
  return res.send("Hello Worapong");
});

//#2
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

const port = process.env.PORT;
app.listen(port, () => {
  //port
  console.log("Server is running on port " + port);
});
