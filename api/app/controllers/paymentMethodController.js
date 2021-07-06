const { PaymentMethod } = require("../../db/models");

const PaymentMethodController = {
  findAll(req, res, next) {
    PaymentMethod.findAll()
      .then((PaymentMethods) => {
        res.status(200).json(PaymentMethods);
      })
      .catch(next);
  },
};

module.exports = PaymentMethodController;
