const sequelize = require('sequelize');
const db = require('../db');

class Products extends sequelize.Model {}

Products.init(
    {
       nombre:{type: sequelize.STRING, allowNull: false},
       precio:{type: sequelize.DOUBLE, allowNull: false},
       imagen:{type: sequelize.TEXT, allowNull: false},
       descripcion:{type: sequelize.TEXT, allowNull: false}, 
       stock:{type: sequelize.INTEGER, allowNull: false}, 
    }, { sequelize: db, timestamps:false ,modelName: 'Product'}
)



module.exports = Products;