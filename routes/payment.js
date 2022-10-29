const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/payments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/payment/addPayment", ensureAuth, postsController.getPayment);

router.get("/:id", ensureAuth, postsController.getPost);

router.post("/createPayment", postsController.addPayment);


module.exports = router;
