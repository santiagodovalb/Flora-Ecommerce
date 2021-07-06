const { Carrito, Products } = require("../../db/models");


const CarritoController = {
    findAll (req, res, next) {
        Carrito.findAll({
            where: { userId: req.user.dataValues.id },
            include: Products,
        })
            .then((Carritos) => {
                res.status(200).json(Carritos);
            })
            .catch(next);
    },

    async findOrCreate (req, res, next) {
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
    },

    async destroyByPk (req, res, next) {
         try {
             const { ProductId } = req.params;
             const userId = req.user.dataValues.id;
             await Carrito.destroy({ where: { userId, ProductId } });
             res.sendStatus(204);
         } catch (err) {
             next(err);
         }
    },

    async changeAmount (req, res, next) {
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
    }

}


module.exports = CarritoController;