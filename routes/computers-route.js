const { Router } = require('express');
const compRouter = Router();
const { getComputers, getOneComputer, postNewComputer, editComputerByColumn, deleteOneComputer } = require('../controllers/computers-ctrl');

compRouter.get('/computers', getComputers);
compRouter.post('/computers', postNewComputer);
compRouter.get('/computers/:compId', getOneComputer);
compRouter.put('/computers/:compId', editComputerByColumn);
compRouter.delete('/computers', deleteOneComputer);

module.exports = compRouter;
