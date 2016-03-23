var express = require('express');
var winston = require('winston');

var router = express.Router();

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      level: 'info',
      timestamp: true,
      prettyPrint: true
    }),
  ]
});

// invoked for any requested passed to this router
router.use(function (req, res, next) {
  logger.info("Received an HTTP request: " + req.url);
  next();
});

// This is the default route that gets all resources.
router.route('/film')
  .get(function (req, res) {
    logger.info("Get all the films.");
    res.json({
      message: 'Get all the films'
    });
  });

// Routes that interact with specific resources.
router.route('/film/:film_id')
  .get(function (req, res) {
    var filmID = req.params.film_id;
    logger.info("Get film " + filmID);
    res.json({
      film: filmID
    });
  })
  .delete(function (req, res) {
    var filmID = req.params.film_id;
    logger.info("Delete film " + filmID);
    res.json({
      delete: filmID
    });
  });

module.exports = router;
