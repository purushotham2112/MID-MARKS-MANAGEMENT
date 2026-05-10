const express = require("express");
const router = express.Router();

const {
  exportPDF,
  exportCSV
} = require("../controllers/reportController");

const { verifyToken } = require("../middleware/authMiddleware");
const { allowRoles } = require("../middleware/roleMiddleware");

// EXPORT PDF → Admin / HOD
router.get("/pdf", verifyToken, allowRoles("admin", "hod"), exportPDF);

// EXPORT CSV → Admin / HOD / Faculty
router.get("/csv", verifyToken, allowRoles("admin", "hod", "faculty"), exportCSV);

module.exports = router;