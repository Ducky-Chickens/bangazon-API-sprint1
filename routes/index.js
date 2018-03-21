const { Router } = require('express');
const router = Router();

router.use(require('./computers-route'))

module.exports = router;