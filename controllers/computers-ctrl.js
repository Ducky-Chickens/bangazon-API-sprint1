const { getAllComps, getSingleComputer, addSingleComputer } = require('../models/Computers');

module.exports.getComputers = (req, res, next) => {
  getAllComps()
  .then(comps => {
    res.status(200).json(comps);
  })
  .catch (err => next(err));
};

module.exports.getOneComputer = ({params: {compId}}, res, next) => {
  getSingleComputer(compId)
  .then(computer => {
    res.status(200).json(computer)
  })
  .catch(err => {
    next(err);
  })
};

module.exports.postNewComputer = (req, res, next) => {
  addSingleComputer(req.body.computer)
  .then(computer => {
    res.status(200).json(computer)
  })
  .catch(err => {
    next(err);
  })
};
