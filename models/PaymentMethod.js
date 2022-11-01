const mongoose = require("mongoose");

const PaymentMethodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  expirationDateMonth:{
    type: Number,
  },
  expirationDateYear:{
    type: Number,
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



module.exports = mongoose.model("PaymentMethod", PaymentMethodSchema);
