const { Router } = require('express');
const compRouter = Router();
const { getComputers, getOneComputer, postNewComputer, editComputerByColumn } = require('../controllers/computers-ctrl');

compRouter.get('/computers', getComputers);
compRouter.post('/computers', postNewComputer);
compRouter.get('/computers/:compId', getOneComputer);
compRouter.put('/computers/:compId', editComputerByColumn);


module.exports = compRouter;
