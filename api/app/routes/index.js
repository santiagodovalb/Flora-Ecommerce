const router = require('express').Router();

router.use('/products', require('./products'))
router.use('/shop', require('./shop'))
router.use('/users', require('./users'))
router.use('/paymentMethod', require('./paymentMethod'))
router.use('/category', require('./category'))
router.use('/reviews', require('./reviews'))

module.exports = router;
