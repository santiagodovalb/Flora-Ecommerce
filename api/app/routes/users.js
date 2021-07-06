const router = require("express").Router();
const passport = require("passport");
const UserController = require('../controllers/userController');

router.post("/register", UserController.createOne);
router.post("/login", passport.authenticate("local"), UserController.login);
router.post("/logout", UserController.logOut);
router.put("/edit/:id", UserController.updateByPk);
router.get("/me", UserController.isLogged);

//rutas para admins
router.get("/allUsers", UserController.findAll);
router.put("/allUsers/:userId", UserController.updateAdminByPk);
router.delete("/allUsers/:userId", UserController.destroyUserByPk);

module.exports = router;
