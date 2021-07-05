const db = require("../db");
const S = require("sequelize");

class Carrito extends S.Model {}

Carrito.init(
  {
    cantidad: {
      type: S.INTEGER,
    },
    precioBase: {
      type: S.INTEGER,
    }
    // state: {
    //   type: S.STRING,
    //   defaultValue: "pending",
    // },
  },
  { sequelize: db, timestamps: false, modelName: "carrito" }
);

module.exports = Carrito;
