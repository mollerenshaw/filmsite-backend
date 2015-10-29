/* This global thing tells jslint that 'require' was defined elsewhere (i.e. in NodeJS) */
/* global require */

var express    = require('express');
//var bodyParser = require('body-parser');

// Create an instance of the app using Express.
var filmsiteApp = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
//filmsiteApp.use(bodyParser.urlencoded({ extended: true }));
//filmsiteApp.use(bodyParser.json());

// Connect to the correct port.
var DEFAULT_PORT = 8080;
var port = process.env.PORT || DEFAULT_PORT;


// SET UP ROUTES.

// get an instance of the express Router.
var router = express.Router();

// all of our routes will be prefixed with /api
filmsiteApp.use('/api', router);

// Set up the default route.
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});


// START THE SERVER
filmsiteApp.listen(port);
console.log('Film DB backend is running on port ' + port);
