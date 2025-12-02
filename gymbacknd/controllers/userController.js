const User = require("../models/User");
const Subscription = require("../models/Subscription");
const Payment = require("../models/Payment");

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
};

exports.updateProfile = async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.user.id, req.body, { new: true });
  res.json(updated);
};

exports.myPlan = async (req, res) => {
  const sub = await Subscription.findOne({ userId: req.user.id }).populate("planId");
  res.json(sub);
};

exports.myPayments = async (req, res) => {
  const payments = await Payment.find({ userId: req.user.id });
  res.json(payments);
};
