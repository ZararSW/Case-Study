const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  roll_no: { type: String, required: true, unique: true },
  age: Number,
  department: String,
  email: String
});

module.exports = mongoose.model("Student", studentSchema);
