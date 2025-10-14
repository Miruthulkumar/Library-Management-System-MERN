const express = require("express");
const router = express.Router();
const checkRole = require("../middleware/authRole");
const User = require("../userSchemaforLMS");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

// login endpoint
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // check if user exists
    const found = await User.findOne({ username });
    if (!found) {
      return res.status(404).send("User not found");
    }

    // check password with bcrypt
    const isMatch = await bcrypt.compare(password, found.password);
    if (!isMatch) {
      return res.status(401).send("Invalid credentials");
    }

    // create JWT
    const token = jwt.sign(
      { username: found.username, role: found.role },
      process.env.SecretKey_URL,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Apply checkRole middleware to protect routes
router.use(checkRole()); // ensure checkRole is a function returning middleware

// add user with input validation and bcrypt hashing
router.post("/usercreation", async (req, res) => {
  try {
    const usersArray = req.body;

    if (!Array.isArray(usersArray) || usersArray.length === 0) {
      return res
        .status(400)
        .json({ error: "Request body must be a non-empty array" });
    }

    const createdUsers = [];

    for (let singleUser of usersArray) {
      const username = singleUser.username?.trim();
      const password = singleUser.password?.trim();
      const role = singleUser.role?.trim();

      if (!username || !password || !role) {
        return res
          .status(400)
          .json({ error: "All fields are required for each user" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        username,
        password: hashedPassword,
        role,
      });

      createdUsers.push(newUser);
    }

    res
      .status(201)
      .json({ message: "Users created successfully", users: createdUsers });
  } catch (err) {
    console.error("Error creating users:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
