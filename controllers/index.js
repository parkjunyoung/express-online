const { Router } = require('express');
const router = Router()

router.use('/admin', require('./admin'));

module.exports = router;