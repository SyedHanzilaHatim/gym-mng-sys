const Subscription = require("../models/Subscription");

exports.buy = async (req, res) => {
  const { planId } = req.body;

  const startDate = new Date();
  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() + 1);

  const sub = await Subscription.create({
    userId: req.user.id,
    planId,
    startDate,
    endDate
  });

  res.json(sub);
};

exports.mySubs = async (req, res) => {
  const sub = await Subscription.find({ userId: req.user.id }).populate("planId");
  res.json(sub);
};

exports.getOne = async (req, res) => {
  res.json(await Subscription.findById(req.params.id));
};

exports.getAll = async (req, res) => {
  res.json(await Subscription.find());
};

exports.cancel = async (req, res) => {
  const sub = await Subscription.findByIdAndUpdate(
    req.params.id,
    { status: "cancelled" },
    { new: true }
  );
  res.json(sub);
};
