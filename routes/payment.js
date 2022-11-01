const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/payments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/add/addPayment", ensureAuth, paymentController.getPayment);

router.get("/edit/:id", ensureAuth, paymentController.getEditPayment);

router.get("/makePayment", paymentController.getMakePayment);

router.post("/createPayment", paymentController.addPayment);

router.post("/makePayment", paymentController.makePayment);

router.put("/editPayment/:id", paymentController.editPayment);

router.delete("/deletePayment/:id", paymentController.deletePayment);

module.exports = router;
