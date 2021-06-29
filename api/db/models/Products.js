const sequelize = require('sequelize');
const db = require('../index');

class Products extends sequelize.Model {}

Products.init(
    {
       nombre:{type: sequelize.STRING, allowNull: false},
       precio:{type: sequelize.DOUBLE, allowNull: false},
       imagen:{type: sequelize.TEXT, allowNull: false},
       descripcion:{type: sequelize.TEXT, allowNull: false}, 
    }, { sequelize: db, modelName: 'Product'}
)

module.exports = Products;