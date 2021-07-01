const db = require("../db");
const S = require("sequelize");

class Carrito extends S.Model {}

Carrito.init(
  {
<<<<<<< HEAD
    arrayOfProducts: {
      type: S.ARRAY(S.JSON),
      defaultValue:[]
=======
    cantidad: {
      type: S.INTEGER,
>>>>>>> 7d25501cc5f8e89a618d249c09f1ed2f06a49352
    },
    // state: {
    //   type: S.STRING,
    //   defaultValue: "pending",
    // },
  },
  { sequelize: db, timestamps: false, modelName: "carrito" }
);

module.exports = Carrito;
