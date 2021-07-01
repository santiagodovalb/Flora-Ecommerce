const db = require("../db");
const S = require("sequelize");

class Carrito extends S.Model {}

Carrito.init(
  {
    arrayOfProducts: {
      type: S.ARRAY(S.JSON),
<<<<<<< HEAD
      defaultValue: [],
=======
      defaultValue:[]
>>>>>>> 6fbc61a6e1a777e7ebfa60e4b37cee6b51823e72
    },
    // state: {
    //   type: S.STRING,
    //   defaultValue: "pending",
    // },
  },
  { sequelize: db, timestamps: false, modelName: "carrito" }
);

module.exports = Carrito;
