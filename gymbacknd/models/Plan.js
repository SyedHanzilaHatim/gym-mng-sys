const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  name: String,
  price: Number,
  duration: Number, // days
  description: String,
});

module.exports = mongoose.model("Plan", planSchema);
