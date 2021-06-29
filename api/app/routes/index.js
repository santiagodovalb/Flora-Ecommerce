const router = require('express').Router();

router.use('/test', (req,res,next) => {
    res.json({nombre: 'Flora'})
})

module.exports = router;
