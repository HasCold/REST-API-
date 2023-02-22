const express  = require("express");
const router = express.Router();
const {getAllProducts, getAllProducts_Testing} = require("../controllers/product")

// Defining The Routes
router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProducts_Testing);

module.exports = router;