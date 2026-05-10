const mongoose = require("mongoose");

const MarksSchema = new mongoose.Schema({
  studentId: String,
  subject: String,
  mid1: Number,
  mid2: Number,
  assignment: Number,
  total: Number,

  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  },

  locked: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Marks", MarksSchema);