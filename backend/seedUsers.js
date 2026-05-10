const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const User = require("../models/User");

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await User.deleteMany();

  const users = [
    {
      username: "admin",
      password: await bcrypt.hash("admin123", 10),
      role: "admin"
    },
    {
      username: "student",
      password: await bcrypt.hash("student123", 10),
      role: "student"
    }
  ];

  await User.insertMany(users);
  console.log("✅ Users Seeded");
  process.exit();
};

seed();