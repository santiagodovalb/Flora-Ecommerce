const router = require("express").Router();
const PaymentMethodController = require("../controllers/paymentMethodController");

router.get("/", PaymentMethodController.findAll);

module.exports = router;
