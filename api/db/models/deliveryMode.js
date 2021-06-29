const sequelize = require('sequelize');
const db = require('../index');

class Delivery extends sequelize.Model {}

Delivery.init(
    {
       modo:{type: sequelize.STRING, allowNull: false},
    }, { sequelize: db, modelName: 'DeliveryMode'}
)

module.exports = Delivery;