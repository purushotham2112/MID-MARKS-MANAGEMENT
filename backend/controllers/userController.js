const User = require("../models/User");
const bcrypt = require("bcryptjs");

// CREATE USER
exports.createUser = async (req, res, next) => {
  try {
    const { username, password, role } = req.body;

    if (!username || !password || !role) {
      return res.status(400).json({ msg: "All fields required" });
    }

    const exists = await User.findOne({ username });
    if (exists) return res.status(400).json({ msg: "User already exists" });

    const hash = await bcrypt.hash(password, 10);

    const user = new User({ username, password: hash, role });
    await user.save();

    res.json({ msg: "User created", user });
  } catch (err) {
    next(err);
  }
};

// GET USERS
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    next(err);
  }
};

// DELETE USER
exports.deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ msg: "User deleted" });
  } catch (err) {
    next(err);
  }
};