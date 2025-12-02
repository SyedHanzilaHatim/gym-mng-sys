const Plan = require("../models/Plan");

exports.getPlans = async (req, res) => {
  res.json(await Plan.find());
};

exports.getPlan = async (req, res) => {
  res.json(await Plan.findById(req.params.id));
};

exports.createPlan = async (req, res) => {
  res.json(await Plan.create(req.body));
};

exports.updatePlan = async (req, res) => {
  res.json(await Plan.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

exports.deletePlan = async (req, res) => {
  await Plan.findByIdAndDelete(req.params.id);
  res.json({ message: "Plan deleted" });
};
