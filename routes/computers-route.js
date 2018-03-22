const { Router } = require('express');
const compRouter = Router();
const { getComputers, getOneComputer, postnewComputer } = require('../controllers/computers-ctrl');

compRouter.get("/computers", getComputers);
compRouter.post('/computers', postNewComputer);
compRouter.get('/computers/:compId', getOneComputer);

module.exports = compRouter;