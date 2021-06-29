const db = require('../db');
const S = require("sequelize");

class PaymentMethod extends S.Model {}

PaymentMethod.init(
  {
    typeMethod: {
      type: S.STRING
    },
  },
  { sequelize: db, timestamps:false,modelName: "PaymentMethod" }
);


module.exports = PaymentMethod;
