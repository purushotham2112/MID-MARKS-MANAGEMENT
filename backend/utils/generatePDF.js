// utils/generatePDF.js

const PDFDocument = require("pdfkit");

exports.generatePDF = (res, data) => {
  const doc = new PDFDocument({ margin: 30 });

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline; filename=marks.pdf");

  doc.pipe(res);

  // Title
  doc.fontSize(18).text("Student Mid Marks Report", {
    align: "center"
  });

  doc.moveDown();

  // Table Header
  doc.fontSize(12).text("StudentID | Subject | Mid1 | Mid2 | Assignment | Total | Status");
  doc.moveDown();

  // Data rows
  data.forEach((m) => {
    doc.text(
      `${m.studentId} | ${m.subject} | ${m.mid1} | ${m.mid2} | ${m.assignment} | ${m.total} | ${m.status}`
    );
  });

  doc.end();
};