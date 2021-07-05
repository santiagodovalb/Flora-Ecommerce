const sequelize = require('sequelize');
const db = require('../db');
const Products = require('./products');

class Order extends sequelize.Model {}

Order.init(
    {
       total:{type: sequelize.DOUBLE, allowNull: false},
       estado:{type: sequelize.STRING, defaultValue: 'en curso'}, /* 'en curso', 'cancelado' y 'realizado' */
       carritos: {
           type: sequelize.ARRAY(sequelize.JSON)
       }
    }, { sequelize: db, modelName: 'Order'}
)

Order.prototype.cancelled = function () {
    this.estado = 'cancelado'
    this.carritos.forEach(carrito => {
        Products.findByPk(this.userId).then(product => {
            product.increment('stock', {by: carrito.cantidad});
            return product.save();
        })
    })
    return this.save();
}

Order.prototype.delivered = function () {
    this.estado = "entregado";
    return this.save();
};

module.exports = Order;