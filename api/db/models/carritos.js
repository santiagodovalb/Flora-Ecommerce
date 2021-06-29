const sequelize = require('../db');
const S = require("sequelize");

class Carrito extends S.Model {}

Carrito.init(
  {
    count: {
        type: S.INTEGER
      },
    state: {
      type: S.STRING,
      defaultValue:'pending'
    },
  },
  { sequelize, modelName: "carrito" }
);


module.exports = Carrito;
