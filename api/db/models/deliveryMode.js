const sequelize = require('sequelize');
const db = require('../db')

class Delivery extends sequelize.Model {}

Delivery.init(
    {
       modo:{type: sequelize.STRING, allowNull: false},
    }, { sequelize: db, timestamps:false,modelName: 'DeliveryMode'}
)

module.exports = Delivery;