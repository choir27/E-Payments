const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  recipient:{
    type: String,
    required: true
  },
  payment: {
    type: Number,
    required: true
  },
  automatic: {
    type: String,
    default: 'Yes',
    enum: ['Yes', 'No']
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});



module.exports = mongoose.model("Payment", PaymentSchema);
