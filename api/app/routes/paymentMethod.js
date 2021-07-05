const router = require("express").Router();
const { PaymentMethod } = require("../../db/models");

router.get("/", (req, res, next) => {
    PaymentMethod.findAll()
        .then((PaymentMethods) => {
            res.status(200).json(PaymentMethods);
        })
        .catch(next);
});

module.exports = router;
