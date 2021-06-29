const sequelize = require('../db');
const S = require("sequelize");

class PaymentMethod extends S.Model {}

PaymentMethod.init(
  {
    typeMethod: {
      type: S.STRING
    },
  },
  { sequelize, modelName: "PaymentMethod" }
);


module.exports = PaymentMethod;
