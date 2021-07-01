const router = require("express").Router();
const { Carrito } = require("../../db/models");

//traigo todos los carritos de un usuario
router.get("/", (req, res, next) => {
    Carrito.findOne({where:{userId:req.user.dataValues.id,/* state:'pending' */}})
        .then((Carrito) => {
            res.status(200).json(Carrito);
        })
        .catch(next);
});

//AGERGO un nuevo objeto al carrito o lo CREO si no existe
router.post("/add", async (req, res, next) => {
    try {
        const product = req.body.product;
        const cantidad = req.body.cantidad
        const userId = req.user.dataValues.id;

        const [carrito, created] = await Carrito.findOrCreate({
            where: { userId },
        });

        const indexProduct = carrito.arrayOfProducts.findIndex(element => {
            return element.product.id === parseInt(product.id)
        })
    
        if (indexProduct >= 0) {
            carrito.arrayOfProducts[indexProduct].cantidad += cantidad
        } else {
            carrito.arrayOfProducts = [...carrito.arrayOfProducts, { product, cantidad }];
        }

        await carrito.save();
        
        
        if (created) res.status(201).json(carrito);

        res.status(200).json(carrito);

    } catch (err) {
        next(err);
    }
});

//ELIMINO un producto
router.put("/:productId", (req, res, next) => {
    Carrito.findOne({ where: { userId: req.user.dataValues.id } })
        .then(async (carrito) => {
            const indexDelete = carrito.arrayOfProducts.findIndex(
                (product) => {
                    return product.id === parseInt(req.params.productId)
                }
            );
            const newcarrito = carrito.arrayOfProducts.splice(indexDelete, 1);
            
            carrito.arrayOfProducts = [...newcarrito]
            await carrito.save()
            res.sendStatus(204)
        })
        .catch(next);
});


//


module.exports = router;