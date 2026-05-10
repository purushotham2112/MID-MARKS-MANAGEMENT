const Marks = require("../models/Marks");
const Log = require("../models/Log");
const { calculateTotal } = require("../utils/calculateMarks");

// ADD MARKS (Faculty)
exports.addMarks = async (req, res, next) => {
  try {
    const { studentId, subject, mid1, mid2, assignment } = req.body;

    if (!studentId || !subject) {
      return res.status(400).json({ msg: "Missing fields" });
    }

    if (mid1 > 25 || mid2 > 25 || assignment > 5) {
      return res.status(400).json({ msg: "Marks exceed limit" });
    }

    const total = calculateTotal(mid1, mid2, assignment);

    const marks = new Marks({
      studentId,
      subject,
      mid1,
      mid2,
      assignment,
      total
    });

    await marks.save();

    await Log.create({
      user: req.user.id,
      action: "Added marks"
    });

    res.json(marks);
  } catch (err) {
    next(err);
  }
};

// GET ALL MARKS
exports.getMarks = async (req, res, next) => {
  try {
    const data = await Marks.find();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

// STUDENT VIEW
exports.getMyMarks = async (req, res, next) => {
  try {
    const data = await Marks.find({ studentId: req.user.id });
    res.json(data);
  } catch (err) {
    next(err);
  }
};

// HOD REVIEW (Approve / Reject)
exports.reviewMarks = async (req, res, next) => {
  try {
    const { action } = req.body;
    const mark = await Marks.findById(req.params.id);

    if (!mark) return res.status(404).json({ msg: "Not found" });

    if (mark.locked) {
      return res.status(400).json({ msg: "Already locked" });
    }

    if (action === "approve") {
      mark.status = "approved";
      mark.locked = true;
    } else {
      mark.status = "rejected";
    }

    await mark.save();

    await Log.create({
      user: req.user.id,
      action: `${action} marks`
    });

    res.json(mark);
  } catch (err) {
    next(err);
  }
};