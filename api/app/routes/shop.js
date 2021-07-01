const router = require("express").Router();
const { Carrito } = require("../../db/models");

//traigo todos los carritos de un usuario
router.get("/", (req, res, next) => {
    Carrito.findAll({
        where: { userId: req.user.dataValues.id  },
        include: 'products'
    })
        .then((Carritos) => {
            res.status(200).json(Carritos);
        })
        .catch(next);
});

router.post("/add", async (req, res, next) => {
    try {
        const { productId, cantidad } = req.body;
        const userId = req.user.dataValues.id;

        const [carrito, created] = await Carrito.findOrCreate({
            where: { userId, productId },
            defaults: {
                cantidad,
            },
        });

        if (!created) carrito.cantidad += cantidad;
        await carrito.save();
<<<<<<< HEAD
        if (created) res.status(201).json(carrito);
        res.status(200).json(carrito);
=======

        res.status(201).json(carrito);
>>>>>>> 7d25501cc5f8e89a618d249c09f1ed2f06a49352
    } catch (err) {
        next(err);
    }
});

<<<<<<< HEAD
//ELIMINO un producto
router.delete("/:productId", (req, res, next) => {
    Carrito.findOne({ where: { userId: req.user.dataValues.id } })
        .then((carrito) => {
            const clone=carrito.arrayOfProducts
            const indexDelete = clone.findIndex(
                (product) => {
                    return product.id === parseInt(req.params.productId)
                }
            );
            clone.splice(indexDelete, 1);
            return carrito.update({...carrito,arrayOfProducts:clone})
        }).then((carritoUpdated) => {
            res.status(204).json(carritoUpdated)
        })
        .catch(next);
});


=======
router.delete("/:productId", async (req, res, next) => {
    try {
        const { productId } = req.params;
        const userId = req.user.dataValues.id;
        await Carrito.destroy({ where: { userId, productId } });
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
});

>>>>>>> 7d25501cc5f8e89a618d249c09f1ed2f06a49352
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
