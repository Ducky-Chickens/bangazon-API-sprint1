const { Router } = require('express');
const router = Router();

router.use(require('./computers-route'));
router.use(require('./departments-route'));
router.use(require('./programs-route'));
router.use(require('./customers-route'));


module.exports = router;