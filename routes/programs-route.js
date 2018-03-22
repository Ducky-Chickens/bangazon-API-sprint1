const { Router } = require('express');
const programRouter = Router();
const { getPrograms, getProgram, addProgram, editProgramByDate } = require('../controllers/programs-ctrl');

programRouter.get("/programs", getPrograms);
programRouter.get("/programs/:programId", getProgram);
programRouter.put("/programs/:programId", editProgramByDate)
programRouter.post("/programs", addProgram);

module.exports = programRouter;