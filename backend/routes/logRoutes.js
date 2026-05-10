const express = require("express");
const router = express.Router();

const { getLogs } = require("../controllers/logController");

const { verifyToken } = require("../middleware/authMiddleware");
const { allowRoles } = require("../middleware/roleMiddleware");

// GET LOGS → Admin only
router.get("/", verifyToken, allowRoles("admin"), getLogs);

module.exports = router;