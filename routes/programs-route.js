const { Router } = require('express');
const programRouter = Router();
const { getPrograms, getProgram, addProgram, editProgramByColumn } = require('../controllers/programs-ctrl');

programRouter.get("/programs", getPrograms);
//add new program when a POST is sent to /programs url
programRouter.post("/programs", addProgram);
//get program by req.param.programId
programRouter.get("/programs/:programId", getProgram);
//edit program identified by id
programRouter.put("/programs/:programId", editProgramByColumn)

module.exports = programRouter;