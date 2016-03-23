var express = require('express');
var logger = require('../util/log');
    
var router = express.Router();

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
