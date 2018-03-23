const { Router } = require('express');
const router = Router();

router.use(require('./computers-route'));
router.use(require('./programs-route'));
router.use(require('./payment-types-route'));

module.exports = router;