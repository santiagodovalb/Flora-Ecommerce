const { Reviews } = require("../../db/models");

const ReviewController = {
    async findOrCreate (req, res, next) {
         try {
             const ProductId = req.params.id;
             const { comentario, valoracion } = req.body;
             const userId = req.user.dataValues.id;
             const [review, created] = await Reviews.findOrCreate({
                 where: { userId, ProductId },
                 defaults: { comentario, valoracion },
             });
             if (created) res.status(201).json(review);
             else res.sendStatus(500);
         } catch (err) {
             next(err);
         }
    },

    async findByProductId (req, res, next) {
        try {
            const ProductId = req.params.id;
            const reviews = await Reviews.findAll({ where: { ProductId }, include: 'user' });
            res.status(200).json(reviews);
        } catch (err) {
            next(err);
        }
    },

    async updateByPk (req, res, next) {
        try {
            const id = req.params.id;
            const { comentario, valoracion } = req.body;
            const userId = req.user.dataValues.id;
            const [updates, review] = await Reviews.update(
                { comentario, valoracion },
                { where: { userId, id }, returning: true }
            );
            res.status(200).json(review[0]);
        } catch (err) {
            next(err);
        }
    },


    async deleteByPk (req, res, next) {
        try {
            const id = req.params.id;
            const userId = req.user.dataValues.id;
            await Reviews.destroy({ where: { id, userId } })
            res.sendStatus(204)
        } catch (err) {
            next(err)
        }
    }

}

module.exports = ReviewController;
