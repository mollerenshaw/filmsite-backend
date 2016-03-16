/* This global thing tells jslint that 'require' was defined elsewhere (i.e. in NodeJS) */
/* global require */
var express      = require('express');
var apiRouter    = require('./routes/filmRouter');

// Create an instance of the app using Express.
var filmsiteBackend = express();

// invoked for any request passed to the app.
filmsiteBackend.use(function (req, res, next) {
  console.log("Received an HTTP request: " + req.url);
  next();
});

// SET UP ROUTES.
filmsiteBackend.use('/api', apiRouter);

// START THE SERVER
var DEFAULT_PORT = 8080;
var port = process.env.PORT || DEFAULT_PORT;

filmsiteBackend.listen(port);

console.info('Film Site API is running on port ' + port);
