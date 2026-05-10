const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  code: String,
  name: String,
  branch: String,
  semester: Number
});

module.exports = mongoose.model("Subject", SubjectSchema);