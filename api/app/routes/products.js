const router = require("express").Router();
const { Op } = require('sequelize');
const ProductController = require('../controllers/productController')

router.get("/", ProductController.findAll);
router.get("/search", ProductController.findByQuery);
router.get("/:id", ProductController.findByPk);

//rutas para admins

router.post("/", ProductController.create)
router.delete("/:id", ProductController.destroy);
router.put("/:id", ProductController.update);


module.exports = router;
