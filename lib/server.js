/* This global thing tells jslint that 'require' was defined elsewhere (i.e. in NodeJS) */
/* global require */
var express = require('express');
var filmRouter = require('./routes/filmRouter');

//var bodyParser = require('body-parser');

// Create an instance of the app using Express.
var moviesApp = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
//moviesApp.use(bodyParser.urlencoded({ extended: true }));
//moviesApp.use(bodyParser.json());

// SET UP ROUTES.
moviesApp.use('/api/films', filmRouter);

// START THE SERVER
var DEFAULT_PORT = 8080;
var port = process.env.PORT || DEFAULT_PORT;
moviesApp.listen(port);

console.info('Film DB backend is running on port ' + port);
