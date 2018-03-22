const { Router } = require('express');
const programRouter = Router();
const { getPrograms, getProgram, addProgram, editProgramByDate } = require('../controllers/programs-ctrl');

programRouter.get("/programs", getPrograms);
//get program by req.param.programId
programRouter.get("/programs/:programId", getProgram);
//edit program identified by id
programRouter.put("/programs/:programId", editProgramByDate)
//add new program when a POST is sent to /programs url
programRouter.post("/programs", addProgram);

module.exports = programRouter;