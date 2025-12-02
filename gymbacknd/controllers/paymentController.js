const Payment = require("../models/Payment");

exports.pay = async (req, res) => {
  const { amount, planId } = req.body;

  const payment = await Payment.create({
    userId: req.user.id,
    amount,
    planId,
    status: "pending"
  });

  res.json(payment);
};

exports.myPayments = async (req, res) => {
  res.json(await Payment.find({ userId: req.user.id }));
};

exports.getAll = async (req, res) => {
  res.json(await Payment.find());
};

exports.verify = async (req, res) => {
  const update = await Payment.findByIdAndUpdate(
    req.params.id,
    { status: "verified" },
    { new: true }
  );
  res.json(update);
};
