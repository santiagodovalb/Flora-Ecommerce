const router = require('express').Router();
const CategoryController = require('../controllers/categoryController')

router.get("/", CategoryController.findAll)
router.post('/add', CategoryController.createOne)
router.delete('/:categoryId',CategoryController.destroy)
router.put('/:categoryId', CategoryController.update)
router.get('/:category/products',CategoryController.findOne)
router.get('/:category/search', CategoryController.findByQuery)

module.exports = router;