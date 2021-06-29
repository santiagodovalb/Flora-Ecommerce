const db = require('../db');
const S = require("sequelize");

class Category extends S.Model {}

Category.init(
  {
    type: {
      type: S.STRING
    },
  },
  { sequelize:db, timestamps:false,modelName: "Category" }
);


module.exports = Category;
