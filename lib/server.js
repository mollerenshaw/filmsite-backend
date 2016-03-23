/* This global thing tells jslint that 'require' was defined elsewhere (i.e. in NodeJS) */
/* global require */
var express   = require('express');
var apiRouter = require('./routes/filmRouter');
var logger    = require('./util/log');

// Create an instance of the app using Express.
var filmsiteBackend = express();

// SET UP ROUTES.
filmsiteBackend.use('/api', apiRouter);

// START THE SERVER
var DEFAULT_PORT = 8080;
var port = process.env.PORT || DEFAULT_PORT;

filmsiteBackend.listen(port);

logger.info('Film Site API is running on port ' + port);
