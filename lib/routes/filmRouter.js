var express = require('express');

var router = express.Router();

// invoked for any requested passed to this router
router.use(function(req, res, next) {
  console.log("Received an HTTP request.");
  next();
});

// Set up the default route.
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

module.exports = router;