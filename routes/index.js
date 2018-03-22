const { Router } = require('express');
const router = Router();

router.use(require('./computers-route'))
router.use(require('./departments-route'))

module.exports = router;