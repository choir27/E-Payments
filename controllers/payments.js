const cloudinary = require("../middleware/cloudinary");
const Payment = require("../models/Payment");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const posts = await Payment.find({ user: req.user.id });
      res.render("profile.ejs", { posts: posts, user: req.user, userID: req.user.id });
    } catch (err) {
      console.log(err);
    }
  },
  getPayment: async (req, res) =>{
    try{
      res.render("addPayment.ejs")
    }catch(err){
      console.log(err)
    }
  },
  getEditPayment: async (req, res) =>{
    try{
      const posts = await Payment.find({ user: req.params.id });
      res.render("editPayment.ejs", { posts: posts, user: req.user, userID: req.user.id })
    }catch(err){
      console.log(err)
    }
  },
  getFeed: async (req, res) => {
    try {
      const posts = await Payment.find().sort({ createdAt: "desc" }).lean();
      res.render("feed.ejs", { posts: posts });
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Payment.findById(req.params.id);
      res.render("post.ejs", { post: post, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  addPayment: async (req, res) => {
    try {
      await Payment.create({
        name: req.body.name,
        cvv: req.body.cvv,
        cardNumber: req.body.cardNumber,
        expirationDateMonth: req.body.expirationDateMonth,
        expirationDateYear: req.body.expirationDateYear,
        user: req.user.id,
      });
      console.log("Payment method has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  editPayment: async (req,res) =>{
    try{
      let character = await Payment.findById(req.params.id).lean() 
      req.body.user = req.user.id
      character = await Payment.findOneAndUpdate({ _id: req.params.id }, req.body, {
          new: true,
          runValidators: true,
        })
res.redirect('/profile')
  } catch(err){
    console.log(err);
  }
}
}
