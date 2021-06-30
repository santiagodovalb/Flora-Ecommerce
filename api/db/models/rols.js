const db = require('../db');
const S = require("sequelize");

class Rol extends S.Model {}

Rol.init(
  {
    type: {
      type: S.STRING
    },
  },
  { sequelize: db,timestamps:false, modelName: "Rol" }
);


module.exports = Rol;
