const Log = require("../models/Log");

// GET ALL LOGS
exports.getLogs = async (req, res, next) => {
  try {
    const logs = await Log.find().sort({ timestamp: -1 });
    res.json(logs);
  } catch (err) {
    next(err);
  }
};