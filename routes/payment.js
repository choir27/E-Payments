const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/payments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/add/addPayment", ensureAuth, postsController.getPayment);

router.get("/edit/:id", ensureAuth, postsController.getEditPayment);

router.get("/:id", ensureAuth, postsController.getPost);

router.post("/createPayment", postsController.addPayment);

router.put("/editPayment/:id", postsController.editPayment);

module.exports = router;
