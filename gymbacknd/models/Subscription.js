const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  planId: mongoose.Schema.Types.ObjectId,
  status: { type: String, default: "active" },
  startDate: Date,
  endDate: Date,
});

module.exports = mongoose.model("Subscription", subscriptionSchema);
