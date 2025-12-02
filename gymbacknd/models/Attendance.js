const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  checkinTime: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Attendance", attendanceSchema);
