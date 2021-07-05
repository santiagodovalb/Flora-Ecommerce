const router = require("express").Router();
const { Reviews } = require("../../db/models");


// Guardo una nueva Review
router.post('/:id/add', async (req, res,next) => {
    try {
        const ProductId = req.params.id
        const { comentario, valoracion } = req.body
        const userId = req.user.dataValues.id;
        const [review,created] = await Reviews.findOrCreate({ where: { userId,ProductId }, defaults:{ comentario, valoracion  }})
        if (created) res.status(201).json(review)
        else res.sendStatus(500)
    } catch (err) {
        next(err)
    }
})

//Devuelvo las Reviews segun el producto
router.get('/:id', async (req, res,next) => {
    try {
        const ProductId = req.params.id
        const reviews = await Reviews.findAll({ where:{ProductId} })
        res.status(200).json(reviews)
    } catch (err) {
        next(err)
    }
})

// Actualizo una Review

router.put('/:id', async (req, res, next) => {
    try {
        const ProductId = req.params.id
        const { comentario, valoracion } = req.body
        const userId = req.user.dataValues.id;
        const [updates,review] = await Reviews.update({ comentario, valoracion }, { where: { userId, ProductId }, returning: true })
        res.status(200).json(review[0])
    } catch (err) {
        next(err)
    }
    
})




module.exports = router;