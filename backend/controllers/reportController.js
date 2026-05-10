const Marks = require("../models/Marks");
const { generatePDF } = require("../utils/generatePDF");
const { generateCSV } = require("../utils/generateCSV");

exports.exportPDF = async (req, res, next) => {
  try {
    const marks = await Marks.find();
    generatePDF(res, marks);
  } catch (err) {
    next(err);
  }
};

exports.exportCSV = async (req, res, next) => {
  try {
    const marks = await Marks.find();
    generateCSV(res, marks);
  } catch (err) {
    next(err);
  }
};