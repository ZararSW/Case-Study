const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/pbl_api")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("DB Connection error:", err));

const studentRoutes = require("./routes/students");
app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to PBL API - Express + MongoDB");
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});


