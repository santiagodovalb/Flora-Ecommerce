const router = require("express").Router();
const { Op } = require('sequelize');
const ProductController = require('../controllers/productController')

router.get("/", ProductController.findAll);
router.get("/search", ProductController.findByQuery);
router.get("/:id", ProductController.findByPk);

//rutas para admins
router.post("/", ProductController.createOne)
router.delete("/:id", ProductController.destroyByPk);
router.put("/:id", ProductController.updateByPk);


module.exports = router;
