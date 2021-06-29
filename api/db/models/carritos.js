<<<<<<< HEAD
const sequelize = require("../db");
=======
const db = require('../db');
>>>>>>> 48b499779a9657f77c66587f33be605167ee977d
const S = require("sequelize");

class Carrito extends S.Model {}

Carrito.init(
  {
<<<<<<< HEAD
    arrayCarrito: {
      type: S.ARRAY(S.JSON),
    },
=======
    arrayOfProducts: {
        type: S.ARRAY(S.JSON)
      },
>>>>>>> 48b499779a9657f77c66587f33be605167ee977d
    state: {
      type: S.STRING,
      defaultValue: "pending",
    },
  },
  { sequelize:db, timestamps:false,modelName: "carrito" }
);

module.exports = Carrito;
