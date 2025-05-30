const User = require("../models/User");

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "User already exists" });

    // Save user without hashing password
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email and password (plain text match)
    const user = await User.findOne({ email, password });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    // Return basic user info (no token)
    res.json({ user: { id: user._id, username: user.username, email: user.email } });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};
