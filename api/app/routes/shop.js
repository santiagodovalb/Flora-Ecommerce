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

        const [carrito, created] = await Carrito.findOrCreate({
            where: { userId, ProductId },
            defaults: {
                cantidad,
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

    const userId = req.user.dataValues.id;
    const carritos = await Carrito.findAll({ where: userId });
    let obj = {};
    let total = 0;
    console.log(carritos)
    carritos.forEach(async (carrito) => {
        const prod = await Products.findByPk(carrito.ProductId);
        console.log(prod)
        total += prod.precio * carrito.cantidad;
        console.log('TOTAL',total)
        console.log('STOCK', carrito.cantidad)
        await prod.decrement("stock", { by: carrito.cantidad });
        console.log("STOCKDESPUES", carrito.cantidad);
        await prod.save();
        obj = { ...obj, product: carrito.Product, cantidad: carrito.cantidad };
    });

    const orden = await Order.create({
        total: total,
        carrito: [obj],
    });
    console.log('ORDER', orden)
    res.status(201).json(orden)

});

module.exports = router;

// router.post("/add", async (req, res, next) => {
//     try {
//         const product = req.body;
//         const userId = req.user.dataValues.id;
//         const [carrito, created] = await Carrito.findOrCreate({
//             where: { userId },
//         });
//         carrito.arrayOfProducts = [...carrito.arrayOfProducts, product];
//         await carrito.save();
//         if (created) res.status(201).json(carrito);
//         res.status(200).json(carrito);
//         console.log(carrito.arrayOfProducts);
//     } catch (err) {
//         next(err);
//     }
// });

// router.delete("/:productId", (req, res, next) => {
//     Carrito.findOne({ where: { userId: req.user.dataValues.id } })
//         .then((carrito) => {
//             const indexDelete = carrito.arrayOfProducts.findIndex(
//                 (product) => product.id === req.params.productId
//             );
//             // console.log('INDEX DELETE', indexDelete)
//             carrito.arrayOfProducts.splice(indexDelete, 1);
//             return carrito.save();
//         })
//         .then((carritoUpdated) => res.status(204).json(carritoUpdated))
//         .catch(next);
// });
