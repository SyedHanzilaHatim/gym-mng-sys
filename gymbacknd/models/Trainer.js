const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema({
  name: String,
  expertise: String,
  experience: Number
});

module.exports = mongoose.model("Trainer", trainerSchema);
