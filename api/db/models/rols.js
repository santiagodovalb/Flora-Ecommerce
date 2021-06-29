const sequelize = require('../db');
const S = require("sequelize");

class Rol extends S.Model {}

Rol.init(
  {
    type: {
      type: S.STRING
    },
  },
  { sequelize, modelName: "Rol" }
);


module.exports = Rol;
