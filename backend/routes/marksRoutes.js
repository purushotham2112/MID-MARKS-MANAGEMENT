const express = require("express");
const router = express.Router();

const {
  addMarks,
  getMarks,
  getMyMarks,
  reviewMarks
} = require("../controllers/marksController");

const { verifyToken } = require("../middleware/authMiddleware");
const { allowRoles } = require("../middleware/roleMiddleware");

// ADD MARKS → Faculty only
router.post("/", verifyToken, allowRoles("faculty"), addMarks);

// GET ALL MARKS → Admin / HOD / Faculty
router.get("/", verifyToken, allowRoles("admin", "hod", "faculty"), getMarks);

// STUDENT VIEW → Only student
router.get("/my", verifyToken, allowRoles("student"), getMyMarks);

// HOD APPROVAL → HOD only
router.put("/review/:id", verifyToken, allowRoles("hod"), reviewMarks);

module.exports = router;