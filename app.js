const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(morgan("short"));
app.use(cors());
app.use(bodyParser.json());

const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

module.exports = app;
