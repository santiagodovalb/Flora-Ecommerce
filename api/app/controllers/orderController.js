const { Carrito, Products, Order } = require("../../db/models");
const sendOrderEmail = require("../../utils");

const OrderController = {
    findAll (req, res, next) {
        const userId = req.user.dataValues.id;
        Order.findAll({ where: { userId } }).then((orders) => {
            res.status(200).json(orders);
        });
    },

    findAllTotal(req, res, next) {
        Order.findAll().then((ordenes) => {
            res.json(ordenes)
        })
    },    

    cancellByPk (req, res, next) {
        const orderId = req.params.id;
        Order.findByPk(orderId)
            .then((order) => {
                return order.cancelled();
            })
            .then((orderCancelled) => {
                res.status(201).json(orderCancelled);
            })
            .catch(next);
    },

    deliverByPk (req, res, next) {
         const orderId = req.params.id;
         Order.findByPk(orderId)
             .then((order) => {
                 return order.delivered();
             })
             .then((orderDelivered) => {
                 res.status(201).json(orderDelivered);
             })
             .catch(next);
    },

    async createOrder (req, res, next) {
        try {
            const { PaymentMethodId } = req.body;
            const userId = req.user.dataValues.id;
            const carritos = await Carrito.findAll({
                where: { userId },
                include: Products,
                attributes: { exclude: ["id", "userId"] },
            });

            let total = 0;

            carritos.forEach((carrito) => {
                total += carrito.precioBase * carrito.cantidad;
                Products.findByPk(carrito.ProductId).then((prod) => {
                    prod.decrement("stock", { by: carrito.cantidad });
                    return prod.save();
                });
            });

            const order = await Order.create({
                total,
                carritos,
                userId,
                PaymentMethodId,
            });

            await sendOrderEmail(
                order.dataValues,
                req.user.dataValues,
                carritos
            );
            await Carrito.destroy({ where: { userId } });

            res.status(201).json(order);
        } catch (err) {
            next(err);
        }
    },

    
}

module.exports = OrderController;