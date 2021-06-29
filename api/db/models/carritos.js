const db = require("../db");
const S = require("sequelize");

class Carrito extends S.Model {}

Carrito.init(
  {
    arrayOfProducts: {
      type: S.ARRAY(S.JSON),
    },
    state: {
      type: S.STRING,
      defaultValue: "pending",
    },
  },
  { sequelize: db, timestamps: false, modelName: "carrito" }
);

module.exports = Carrito;
