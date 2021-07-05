const router = require('express').Router();

router.use('/products', require('./products'))
router.use('/shop', require('./shop'))
router.use('/users', require('./users'))
router.use('/paymentMethod', require('./paymentMethod'))
router.use('/category', require('./category'))



router.use('/test', (req,res,next) => {
    res.json({nombre: 'Flora'})
})

module.exports = router;
