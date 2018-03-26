const { Router } = require('express');
const router = Router();

router.use(require('./departments-route'));
router.use(require('./computers-route'));
router.use(require('./departments-route'));
router.use(require('./programs-route'));
router.use(require('./customers-route'));
router.use(require('./programs-route'));
router.use(require('./product-types-route'));
router.use(require('./payment-types-route'));
router.use(require('./products-route'));
router.use(require('./orders-route'));
router.use(require('./employees-route'));

module.exports = router;