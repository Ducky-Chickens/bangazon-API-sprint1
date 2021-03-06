'use strict'; 
const { getAllPrograms, getOneProgram, addNewProgram, 
  editProgram, removeProgram, replaceProgram } = require('../models/Training-program');

module.exports.getPrograms = (req, res, next) => {
  getAllPrograms()
  .then(programs => {
    res.status(200).json(programs);
  })
  .catch(err => next(err));
}

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
      //send back 500 as generic server error
      error.status = 500;
      next(error);
    }
  })
  .catch(err => next(err));
}

module.exports.editProgramByColumn = (req, res, next) => {
  // pass in req params id and req.body object ---> postman
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
  .catch(err => next(err));
}

module.exports.replaceOldProgram = (req, res, next) => {
  // pass in req.body object ---> postman
  replaceProgram(req.body)
  .then(data => {
    if(data){
      res.status(200).json(data);
    } else {
      let error = new Error('Failed to edit Program');
      error.status = 500;
      next(error);
    }
  })
  .catch(err => next(err));
}

module.exports.removeProgramById = (req, res, next) => {
  //first getById to check if entry exists
  getOneProgram(req.body.program_id)
  .then(program => {
    //check if program's start date is in future (greater than current date)
    if(program){
      if (new Date(program.start_date) > new Date()){
        removeProgram(req.body.program_id)
        .then(data => {
          res.status(200).json(data);
        })
      } else {
        let error = new Error('Failed to delete, program must be scheduled to start at a future date.');
        error.status = 405;
        next(error);
      }
    } else {
      let error = new Error('Program not found!');
      error.status = 404;
      next(error);
    }
  })
  .catch(err => next(err));
}
