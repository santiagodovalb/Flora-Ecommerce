const sequelize = require('../db');
const S = require("sequelize");

class Category extends S.Model {}

Category.init(
  {
    type: {
      type: S.STRING
    },
  },
  { sequelize, modelName: "Category" }
);


module.exports = Category;
