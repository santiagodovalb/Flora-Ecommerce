const router = require("express").Router();
const passport = require("passport");
const UserController = require('../controllers/userController');


router.post("/register", UserController.create);
router.post("/login", passport.authenticate("local"), UserController.login);
router.post("/logout", UserController.logOut);
router.put("/edit/:id", UserController.update);
router.get("/me", UserController.isLogged);

//rutas para admins

router.get("/allUsers", UserController.findAll);
router.put("/allUsers/:userId", UserController.updateAdmin);
router.delete("/allUsers/:userId", UserController.destroy);

module.exports = router;
