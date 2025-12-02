const Attendance = require("../models/Attendance");

exports.checkin = async (req, res) => {
  const data = await Attendance.create({
    userId: req.user.id
  });

  res.json(data);
};

exports.my = async (req, res) => {
  res.json(await Attendance.find({ userId: req.user.id }));
};

exports.all = async (req, res) => {
  res.json(await Attendance.find());
};
