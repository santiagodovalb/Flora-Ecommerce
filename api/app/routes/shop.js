const router = require("express").Router();
const CarritoController = require('../controllers/carritoController');
const OrderController = require('../controllers/orderController');

router.get("/", CarritoController.findAll);
router.post("/add", CarritoController.findOrCreate);
router.delete("/:ProductId", CarritoController.destroyByPk);
router.post("/:ProductId/amount", CarritoController.changeAmount);

router.get("/order", OrderController.findAll);
router.put("/order/cancelled/:id", OrderController.cancellByPk);
router.put("/order/delivered/:id", OrderController.deliverByPk);
router.post("/order", OrderController.createOrder);
router.get('/order/findAll', OrderController.findAllTotal)

module.exports = router;
