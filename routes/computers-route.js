const { Router } = require('express');
const compRouter = Router();
const { getComputers, getOneComputer, postNewComputer, editComputerByColumn, deleteOneComputer, replaceComputer } = require('../controllers/computers-ctrl');

compRouter.get('/computers', getComputers);
compRouter.post('/computers', postNewComputer);
compRouter.delete('/computers', deleteOneComputer);
compRouter.put('/computers', replaceComputer)
compRouter.get('/computers/:compId', getOneComputer);
compRouter.patch('/computers/:compId', editComputerByColumn);

module.exports = compRouter;
