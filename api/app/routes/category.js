const router = require('express').Router();
const { Category, Products } = require('../../db/models');

router.get("/", async (req, res, next) => {
  try {
      const categories = await Category.findAll()
      res.status(200).json(categories)
  } catch (err) {
      next(err)
  }
})

router.post('/allCategory/add', (req, res, next) => {
    Category.create({
       type: req.body.type,
    }).then((category) => {
        res.status(201).send(category)
    }).catch(next);
})

router.delete('/allCategory/:categoryId', (req, res, next) => {
    Category.destroy({
        where:{ id: req.params.categoryId}
    }).then(() => {
        res.sendStatus(200)
    }).catch(next)
})

router.put('allCategory/:categoryId', (req, res, next) => {
    Category.update({ type: req.body.type }, { where: { id: req.params.categoryId }}).then(() => {
        res.sendStatus(200);
    }).catch(next)
})



router.get('/:category/products', (req, res, next) => {
    Category.findOne({
      where: {
        type: req.params.category
      }, include: {
        model: Products,
        as: 'product', 
      }
    }).then(products => {
      res.status(200).json(products)
    }).catch(next)
  })
  
  
  router.get('/:category/search', (req, res, next) => {
    const { nombre } = req.query;
  
    Category.findOne({
        where: {
          type: req.params.category
        }, include: {
          model: Products,
          as: 'product', 
        }
      }).then( ({ product }) => {
       const productsFilter = product.filter( prod => prod.nombre.includes(nombre))
        res.status(200).json(productsFilter)
      }).catch(next)
  })

module.exports = router;