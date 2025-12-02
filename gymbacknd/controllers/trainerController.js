const Trainer = require("../models/Trainer");

exports.getTrainers = async (req, res) => {
  res.json(await Trainer.find());
};

exports.getTrainer = async (req, res) => {
  res.json(await Trainer.findById(req.params.id));
};

exports.createTrainer = async (req, res) => {
  res.json(await Trainer.create(req.body));
};

exports.updateTrainer = async (req, res) => {
  res.json(await Trainer.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

exports.deleteTrainer = async (req, res) => {
  await Trainer.findByIdAndDelete(req.params.id);
  res.json({ message: "Trainer deleted" });
};
