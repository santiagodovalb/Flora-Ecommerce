const router = require("express").Router();
const CarritoController = require('../controllers/carritoController');
const OrderController = require('../controllers/orderController');

//Carritos
router.get("/", CarritoController.findAll);
router.post("/add", CarritoController.findOrCreate);
router.delete("/:ProductId", CarritoController.destroy);
router.post("/:ProductId/amount", CarritoController.changeAmount);

//Orden
router.get("/order", OrderController.findAll);
router.put("/order/cancelled/:id", OrderController.cancellByPk);
router.put("/order/delivered/:id", OrderController.deliverByPk);
router.post("/order", OrderController.createOrder);

module.exports = router;
