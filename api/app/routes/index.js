const router = require('express').Router();

router.use('/products', require('./products'))
router.use('/shop', require('./shop'))
router.use('/users', require('./users'))
router.use('/reviews', require('./reviews'))


router.use('/test', (req,res,next) => {
    res.json({nombre: 'Flora'})
})

module.exports = router;
