const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  rollNo: String,
  name: String,
  branch: String,
  semester: Number,
  section: String
});

module.exports = mongoose.model("Student", StudentSchema);