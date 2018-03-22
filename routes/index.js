const { Router } = require('express');
const router = Router();

<<<<<<< HEAD
router.use(require('./computers-route'))
router.use(require('./departments-route'))
=======
router.use(require('./computers-route'));
router.use(require('./programs-route'));
>>>>>>> master

module.exports = router;