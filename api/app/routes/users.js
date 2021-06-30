const router = require("express").Router();
const { User } = require("../../db/models");

router.post("/register", (req, res, next) => {
  User.create({
    nick: req.body.nick,
    email: req.body.email,
    password: req.body.password,
    direction: req.body.direction,
    phone: req.body.phone,
  }).then((user) => res.status(200).send(user));
});

router.post("/login", // passport.authenticate("local"),//
 (req, res, next) => {
  res.send(req.user);
});

router.post("/logout", (req, res, next) => {
  req.logOut();
  res.sendStatus(200);
});

router.put("/:id", (req, res) => {
  User.update(req.body, { where: { id: req.params.id } }).then(() => {
    res.sendStatus(201);
  });
});

router.get("/me", (req, res, next) => {
  if (!req.user) return res.sendStatus(401);
  return res.send(req.user);
});


//rutas para admins


router.get("/allusers", async (req, res, next) => {
  const users = await User.findAll();
  return res.send(users);
});


router.put("/allUsers/:userId", (req, res, next) => {
    User.update({ rolId: 1 }, { where: { id: req.params.userId } }).then(() => {
        res.sendStatus(200);
    })
});

router.delete("/allUsers/:userId", (req, res, next) => {
  const usuarioId = req.params.userId;
  User.destroy({
    where: {
      id: usuarioId,
    },
  }).then(() => {
    res.sendStatus(200);
  });
});


module.exports = router;
