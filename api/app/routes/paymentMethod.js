const router = require("express").Router();
const PaymentMethodController = require("../controllers/paymentMethod");

router.get("/", PaymentMethodController.findAll);

module.exports = router;
