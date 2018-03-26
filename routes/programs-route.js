const { Router } = require('express');
const programRouter = Router();
const { getPrograms, getProgram, addProgram, 
editProgramByColumn, removeProgramById, replaceOldProgram } = require('../controllers/programs-ctrl');

programRouter.get("/programs", getPrograms);
//add new program when a POST is sent to /programs url
programRouter.post("/programs", addProgram);
programRouter.delete("/programs", removeProgramById);
//replace a whole program
programRouter.put("/programs", replaceOldProgram);
//get program by req.param.programId
programRouter.get("/programs/:programId", getProgram);
//edit program identified by id
programRouter.patch("/programs/:programId", editProgramByColumn)

module.exports = programRouter;