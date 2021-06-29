const sequelize = require('sequelize');
const db = require('../index');

class Order extends sequelize.Model {}

Order.init(
    {
       total:{type: sequelize.DOUBLE, allowNull: false},
       estado:{type: sequelize.BOOLEAN, allowNull: false},
    }, { sequelize: db, modelName: 'Order'}
)

module.exports = Order;