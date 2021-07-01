const router = require("express").Router();
const { Carrito } = require("../../db/models");

//traigo todos los carritos de un usuario
router.get("/", (req, res, next) => {
    Carrito.findOne({
        where: { userId: req.user.dataValues.id /* state:'pending' */ },
    })
        .then((Carrito) => {
            res.status(200).json(Carrito);
        })
        .catch(next);
});

//AGERGO un nuevo objeto al carrito o lo CREO si ya existe
router.post("/add", async (req, res, next) => {
    try {
        const product = req.body;
        const userId = req.user.dataValues.id;
        const [carrito, created] = await Carrito.findOrCreate({
            where: { userId },
        });
        carrito.arrayOfProducts = [...carrito.arrayOfProducts, product];
        await carrito.save();
        if (created) res.status(201).json(carrito);
        res.status(200).json(carrito);
<<<<<<< HEAD
        console.log(carrito.arrayOfProducts);
=======
>>>>>>> 6fbc61a6e1a777e7ebfa60e4b37cee6b51823e72
    } catch (err) {
        next(err);
    }
});

//ELIMINO un producto
router.delete("/:productId", (req, res, next) => {
    Carrito.findOne({ where: { userId: req.user.dataValues.id } })
        .then((carrito) => {
<<<<<<< HEAD
            const indexDelete = carrito.arrayOfProducts.findIndex(
                (product) => product.id === req.params.productId
            );
            // console.log('INDEX DELETE', indexDelete)
            carrito.arrayOfProducts.splice(indexDelete, 1);
            return carrito.save();
        })
        .then((carritoUpdated) => res.status(204).json(carritoUpdated))
        .catch(next);
});
=======
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

>>>>>>> 6fbc61a6e1a777e7ebfa60e4b37cee6b51823e72

module.exports = router;
