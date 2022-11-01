const Payment = require("../models/PaymentMethod");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const payment = await Payment.find({ user: req.user.id });
      res.render("profile.ejs", { payment: payment, user: req.user, userID: req.user.id });
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
      const payment = await Payment.find({ user: req.params.id });
      res.render("editPayment.ejs", { payment: payment, user: req.user, userID: req.user.id })
    }catch(err){
      console.log(err)
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
},
deletePayment: async (req,res)=>{
  try{
  await Payment.remove({ _id: req.params.id });
  console.log("Deleted Payment");
  res.redirect("/profile");
  }catch(err){
    console.log(err)
  }
},
getMakePayment: async (req,res)=>{
  try{
    const payment = await Payment.find({ user: req.params.id });
    res.render("makePayment.ejs", { payment: payment, user: req.user, userID: req.user.id })
  }catch(err){
    console.log(err)
  }
} 
}
