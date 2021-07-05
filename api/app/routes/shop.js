const router = require("express").Router();
const { Carrito, Products, Order } = require("../../db/models");

//traigo todos los carritos de un usuario
router.get("/", (req, res, next) => {
    Carrito.findAll({
        where: { userId: req.user.dataValues.id },
        include: Products,
    })
        .then((Carritos) => {
            res.status(200).json(Carritos);
        })
        .catch(next);
});

router.post("/add", async (req, res, next) => {
    try {
        const { ProductId, cantidad } = req.body;
        const userId = req.user.dataValues.id;
        const { precio } = await Products.findByPk(ProductId);

        const [carrito, created] = await Carrito.findOrCreate({
            where: { userId, ProductId },
            defaults: {
                cantidad,
                precioBase: precio,
            },
        });

        if (!created) carrito.cantidad += cantidad;
        await carrito.save();

        res.status(201).json(carrito);
    } catch (err) {
        next(err);
    }
});

router.delete("/:ProductId", async (req, res, next) => {
    try {
        const { ProductId } = req.params;
        const userId = req.user.dataValues.id;
        await Carrito.destroy({ where: { userId, ProductId } });
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
});

router.post("/order", async (req, res, next) => {
    try {
        const userId = req.user.dataValues.id;
        const carritos = await Carrito.findAll({
            where: { userId },
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
        });

        await Carrito.destroy({ where: { userId } });

        res.status(201).json(order);
    } catch (err) {
        next(err);
    }
});

router.post("/:ProductId/amount", async (req, res, next) => {
    const product = req.params.ProductId;
    const mode = req.body.mode;
    const usuario = req.user.dataValues.id;
    const carro = await Carrito.findOne({
        where: { ProductId: product, userId: usuario },
    });
    if (mode === "resta") await carro.decrement("cantidad", { by: 1 });
    if (mode === "suma") await carro.increment("cantidad", { by: 1 });

    await carro.save();
    res.status(200).json(carro);
});

module.exports = router;

// router.post("/order2", async (req, res, next) => {
//     try {
//         const userId = req.user.dataValues.id;
//         const carritos = await Carrito.findAll({ where: userId });
//         let obj = {};
//         let total = 0;
//         carritos.forEach( (carrito) => {
//             Products.findByPk(carrito.ProductId).then(prod => {
//                total += prod.precio * carrito.cantidad;
//                prod.decrement("stock", { by: carrito.cantidad });
//                prod.save();
//                obj = { ...obj, product: prod, cantidad: carrito.cantidad };
//             })

//         });

//         console.log("TOTAL AFU", total);
//         const orden = await Order.create({
//             total: total,
//             carrito: [obj],
//         });
//         console.log("ORDER", orden);
//         res.status(201).json(orden);
//     } catch (err) {
//         next(err);
//     }
// });
