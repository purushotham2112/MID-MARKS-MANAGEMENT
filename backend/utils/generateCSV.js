// utils/generateCSV.js

const { Parser } = require("json2csv");

exports.generateCSV = (res, data) => {
  try {
    const fields = [
      "studentId",
      "subject",
      "mid1",
      "mid2",
      "assignment",
      "total",
      "status"
    ];

    const parser = new Parser({ fields });

    const csv = parser.parse(data);

    res.header("Content-Type", "text/csv");
    res.attachment("marks.csv");

    return res.send(csv);
  } catch (error) {
    console.error("CSV Error:", error.message);
    res.status(500).json({ msg: "CSV generation failed" });
  }
};