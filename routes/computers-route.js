const { Router } = require('express');
const compRouter = Router();
const { getComputers } = require('../controllers/computers-ctrl');

compRouter.get("/computers", getComputers);
// dirRouter.get('/computers/:compId', getOneComputer);

module.exports = compRouter;