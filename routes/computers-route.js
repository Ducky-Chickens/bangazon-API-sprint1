const { Router } = require('express');
const compRouter = Router();
const { getComputers } = require('../controllers/computers-ctrl');

compRouter.get("/computers", getComputers);

// compRouter.get('/computers/:compId', getOneComputer);

// THE FUTURE
// compRouter.post('/computers', postNewComputer);

module.exports = compRouter;
