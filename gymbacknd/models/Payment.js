const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  amount: Number,
  planId: mongoose.Schema.Types.ObjectId,
  status: { type: String, default: "pending" },
});

module.exports = mongoose.model("Payment", paymentSchema);
