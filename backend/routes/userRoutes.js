const express = require("express");
const router = express.Router();

const {
  createUser,
  getUsers,
  deleteUser
} = require("../controllers/userController");

const { verifyToken } = require("../middleware/authMiddleware");
const { allowRoles } = require("../middleware/roleMiddleware");

// CREATE USER (Admin only)
router.post("/", verifyToken, allowRoles("admin"), createUser);

// GET USERS (Admin only)
router.get("/", verifyToken, allowRoles("admin"), getUsers);

// DELETE USER (Admin only)
router.delete("/:id", verifyToken, allowRoles("admin"), deleteUser);

module.exports = router;