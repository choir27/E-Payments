const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const PostSchema = new mongoose.Schema({
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


PostSchema.pre("save", function save(next) {
  const post = this;
  if (!post.isModified("cardNumber")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(post.cardNumber, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      post.cardNumber = hash;
      next();
    });
  });
});



PostSchema.pre("save", function save(next) {
  const post = this;
  if (!post.isModified("cvv")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(post.cvv, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      post.cvv = hash;
      next();
    });
  });
});

module.exports = mongoose.model("Post", PostSchema);
