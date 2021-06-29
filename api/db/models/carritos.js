const sequelize = require('../db');
const S = require("sequelize");

class Carrito extends S.Model {}

Carrito.init(
  {
    arrayCarrito: {
        type: S.ARRAY(S.JSON)
      },
    state: {
      type: S.STRING,
      defaultValue:'pending'
    },
  },
  { sequelize, modelName: "carrito" }
);


module.exports = Carrito;
