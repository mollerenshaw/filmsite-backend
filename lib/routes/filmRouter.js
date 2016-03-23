var express = require('express');
var logger = require('../util/log');
var omdbBridge = require('../bridges/omdbBridge');

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
      message: 'GET: all the films'
    });
  });

// Routes that interact with specific resources.
router.route('/film/:film_id')
  .get(function (req, res) {
    var filmID = req.params.film_id;
    logger.info("GET: film " + filmID);

    omdbBridge.getFilmByTitle(filmID, function(details) {
        logger.info("Details returned: " + JSON.stringify(details));
        res.json(details);
    });
  })
  .delete(function (req, res) {
    var filmID = req.params.film_id;
    logger.info("DELETE: film " + filmID);
    res.json({
      delete: filmID
    });
  });

module.exports = router;
