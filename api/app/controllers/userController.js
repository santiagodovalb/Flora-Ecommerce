const { User } = require("../../db/models");

const UserController = {
  create(req, res, next) {
    User.create({
      nick: req.body.nick,
      email: req.body.email,
      password: req.body.password,
      direction: req.body.direction,
      phone: req.body.phone,
    })
      .then((user) => res.status(201).send(user))
      .catch(next);
  },
  login(req, res, next) {
    res.send(req.user);
  },
  logOut(req, res, next) {
    req.logOut();
    res.sendStatus(200);
  },
  update(req, res, next) {
    User.update(req.body, { where: { id: req.params.id }, returning: true })
      .then(([updated, user]) => {
        res.status(201).json(user[0]);
      })
      .catch(next);
  },
  isLogged(req, res, next) {
    if (!req.user) return res.sendStatus(401);
    return res.send(req.user);
  },
  findAll(req, res, next) {
    User.findAll()
      .then((users) => {
        res.staus(200).send(users);
      })
      .catch(next);
  },
  updateAdmin(req, res, next) {
    const rolId = req.body.rolId;
    if (req.user.dataValues.id !== req.params.userId) {
      User.update({ rolId }, { where: { id: req.params.userId } })
        .then(() => {
          res.sendStatus(200);
        })
        .catch(next);
    } else {
      res.sendStatus(405);
    }
  },
  destroy(req, res, next) {
    const usuarioId = req.params.userId;
    User.destroy({
      where: {
        id: usuarioId,
      },
    })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(next);
  },
};

module.exports = UserController;