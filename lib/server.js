/* This global thing tells jslint that 'require' was defined elsewhere (i.e. in NodeJS) */
/* global require */

var express    = require('express');
var filmRouter  = require('./routes/filmRouter');
//var bodyParser = require('body-parser');

// Create an instance of the app using Express.
var moviesApp = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
//moviesApp.use(bodyParser.urlencoded({ extended: true }));
//moviesApp.use(bodyParser.json());

// Connect to the correct port.
var DEFAULT_PORT = 8080;
var port = process.env.PORT || DEFAULT_PORT;

// SET UP ROUTES.
moviesApp.use('/api/film', filmRouter);

// START THE SERVER
moviesApp.listen(port);
console.log('Film DB backend is running on port ' + port);
