const router = require("express").Router();
const { Products } = require("../../db/models");

router.get("/", (req, res, next) => {
  Products.findAll()
    .then((arrayProducts) => {
      res.status(200).json(arrayProducts);
    })
    .catch(next);
});

router.get("/search", (req, res, next) => {
  Products.findAll({
    where: {
      nombre: req.query.nombre,
    },
  })
    .then((arrayProducts) => {
      res.status(200).json(arrayProducts);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  Products.findByPk(req.params.id)
    .then((product) => {
      res.status(200).json(product);
    })
    .catch(next);
});

//rutas para admins

router.post("/", (req, res, next) => {
  Products.create(req.body)
    .then((product) => {
      res.status(201).json(product);
    })
    .catch(next)
})

router.delete("/:id", (req, res, next) => {
  Products.findByPk(req.params.id)
    .then((product) => {
      return product.destroy();
    })
    .then((promiseDestroy) => res.status(204).send(promiseDestroy))
    .catch(next);
});

router.put("/:id", (req, res, next) => {
  const { nombre, precio, imagen, descripcion } = req.body;
  Products.findByPk(req.params.id)
    .then((product) => {
      product.nombre = nombre;
      product.precio = precio;
      product.imagen = imagen;
      product.descripcion = descripcion;
      return product.save();
    })
    .then((productSave) => res.status(204).send(productSave))
    .catch(next);
});

module.exports = router;
