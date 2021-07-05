const db = require('../db');
const S = require("sequelize");

class PaymentMethod extends S.Model {}

PaymentMethod.init(
  {
    type: {
      type: S.STRING
    },
  },
  { sequelize: db, timestamps:false,modelName: "PaymentMethod" }
);


module.exports = PaymentMethod;
