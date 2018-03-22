'use strict'; 
const { getAllPrograms, getOneProgram, addNewProgram, editProgram } = require('../models/Training-programs');

module.exports.getPrograms = (req, res, next) => {
  getAllPrograms()
  .then(programs => {
    res.status(200).json(programs);
  })
  .catch(err => next(err));
}

module.exports.getProgram = (req, res, next) => {
  getOneProgram(req.params.programId)
  .then(program => {
    if(program){
      res.status(200).json(program);
    } else {
      let error = new Error('Program not found!');
      error.status = 404;
      next(error);
    }
  })
  .catch(err => next(err));
}

module.exports.addProgram = (req, res, next) => {
  addNewProgram(req.body.program)
  .then(data => {
    if(data){
      res.status(200).json(data);
    } else {
      let error = new Error('Failed to add Program');
      error.status = 500;
      next(error);
    }
  })
}

module.exports.editProgramByDate = (res, req, next) => {
  editProgram(req.params.programId, req.body)
  .then(data => {
    if(data){
      res.status(200).json(data);
    } else {
      let error = new Error('Failed to edit Program');
      error.status = 500;
      next(error);
    }
  })
}

module