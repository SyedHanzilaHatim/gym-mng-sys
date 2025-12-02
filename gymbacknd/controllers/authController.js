const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email already used" });

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName, lastName, email, password: hashed
    });

    res.json({ message: "Signup successful", user });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "Not found" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      "SECRET_KEY",
      { expiresIn: "7d" }
    );

    res.json({ message: "Login success", token });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.logout = (req, res) => {
  return res.json({ message: "Logout successful" });
};

exports.me = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
};
