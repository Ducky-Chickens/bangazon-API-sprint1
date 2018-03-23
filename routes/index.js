const { Router } = require('express');
const router = Router();

router.use(require('./computers-route'));
router.use(require('./programs-route'));
router.use(require('./prodTypes-route'));
router.use(require('./payment-types-route'));
router.use(require('./orders-route'));
router.use(require('./employees-route'));

module.exports = router;
