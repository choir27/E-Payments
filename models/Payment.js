const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  recipient:{
    type: String
  },
  payment: {
    type: Number
  },
//   automatic: {
//     type: String,
//     default: 'Yes',
//     enum: ['Yes', 'No']
//   },
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
