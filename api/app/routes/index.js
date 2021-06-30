const router = require('express').Router();

router.use('/products', require('./products'))
router.use('/users', require('./users'))

router.use('/test', (req,res,next) => {
    res.json({nombre: 'Flora'})
})

module.exports = router;
