const router = require('express').Router();

router.use('/products', require('./products'))
<<<<<<< HEAD
router.use('/users', require('./users'))
=======
router.use('/shop', require('./shop'))
router.use('/users', require('./users'))

>>>>>>> 4a06059dc7f704f32487be4f683b6f2e7699b089

router.use('/test', (req,res,next) => {
    res.json({nombre: 'Flora'})
})

module.exports = router;
