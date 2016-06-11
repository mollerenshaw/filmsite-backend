/* This global thing tells jslint that 'require' was defined elsewhere (i.e. in NodeJS) */
/* global require */
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var apiRouter = require('./routes/apiRouter');
var logger = require('./util/log');

// Create an instance of the app using Express.
var filmsiteBackend = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
filmsiteBackend.use(bodyParser.urlencoded({
  extended: true
}));
filmsiteBackend.use(bodyParser.json());

// SET UP ROUTES.
filmsiteBackend.use('/api', apiRouter);

// START THE SERVER
var DEFAULT_PORT = 8080;
var port = process.env.PORT || DEFAULT_PORT;

var DEFAULT_MONGO_HOST = "localhost:27017";
var mongoHost = process.env.MONGO_HOST || DEFAULT_MONGO_HOST;

var DEFAULT_MONGO_USER = "fsdb";
var mongoUser = process.env.MONGO_USER || DEFAULT_MONGO_USER;

var DEFAULT_MONGO_PASSWORD = "changeme";
var mongoPassword = process.env.MONGO_PASSWORD || DEFAULT_MONGO_PASSWORD;

var mongoOptions = {
  user: mongoUser,
  pass: mongoPassword
};
var mongoOptions = {};


var listen = function() {
    
  filmsiteBackend.listen(port);
  logger.info('Connected to database at ' + mongoHost + ' using credentials ' + mongoUser + '/' + mongoPassword);   
  logger.info('Film Site API is running on port ' + port);
}

// TODO: Need a max retry count, to prevent infinite recursion.
var connectWithRetry = function(cb) {
  return mongoose.connect(mongoHost, function(err) {
    if (err) {
      logger.error('Failed to connect to mongo on startup - retrying in 5 secs.', err);
      setTimeout(connectWithRetry, 5000);
    } else {
      cb();
    }
  });
};
connectWithRetry(listen);