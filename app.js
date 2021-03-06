const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //reads json in req.body
const routes = require('./routes/');
require('dotenv').config();

app.use(bodyParser.json()); // tell express to use json encoded bodies

app.use("/api/", routes);

app.use( (req, res, next) => {
  let err = new Error('Page not found');
  err.status = 404;
  next(err);
});

app.use( (err, req, res, next) => {
  res.status(err.status || 500);
  // the all encompassing error handler
  res.json({
    message: "Oh no! We couldn't find what you were looking for.",
    err: err.message
  })
});

const port = process.env.PORT || 8666;

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
