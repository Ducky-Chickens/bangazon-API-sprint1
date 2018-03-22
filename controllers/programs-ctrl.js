'use strict'; 
const { getAllPrograms, getOneProgram, addNewProgram, editProgram } = require('../models/Training-programs');

module.exports.getPrograms = (req, res, next) => {
  getAllPrograms()
  .then(programs => {
    res.status(200).json(programs);
  })
  .catch(err => next(err));
}
//get single program by its id
module.exports.getProgram = (req, res, next) => {
  //pass in id through req.params
  getOneProgram(req.params.programId)
  .then(program => {
    if(program){
      res.status(200).json(program);
    } else {
      // tell user if no program returned
      let error = new Error('Program not found!');
      error.status = 404;
      next(error);
    }
  })
  .catch(err => next(err));
}

module.exports.addProgram = (req, res, next) => {
  //pass in req.body.('json object') ---> test on postman
  addNewProgram(req.body)
  .then(data => {
    if(data){
      res.status(200).json(data);
    } else {
      let error = new Error('Failed to add Program');
      //TEMPORARY SOLUTION, send back 500 as generic server error
      error.status = 500;
      next(error);
    }
  })
}

module.exports.editProgramByColumn = (req, res, next) => {
  // pass in req params id AND req body object ---> postman
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
