var express = require('express');
var logger = require('../util/log');
var omdbBridge = require('../bridges/omdbBridge');

var filmRouter = express.Router();

// invoked for any requested passed to this router
filmRouter.use(function (req, res, next) {
  logger.info("Film end-point received an HTTP request: " + req.url);
  next();
});

// This is the default route that gets all resources.
filmRouter.route('/')
  .get(function (req, res) {
    logger.info("Get all the films.");
    res.json({
      message: 'GET: all the films'
    });
  });

// Routes that interact with specific resources.
filmRouter.route('/:film_title')
  .get(function (req, res) {
    var film_title = req.params.film_title;
    logger.info("GET: film " + film_title);

    omdbBridge.getFilmByTitle(film_title, function (details) {
      logger.info("Details returned: " + JSON.stringify(details));
      res.json(details);
    });
  })
  .delete(function (req, res) {
    var film_title = req.params.film_title;
    logger.info("DELETE: film " + film_title);
    res.json({
      delete: film_title
    });
  });

module.exports = filmRouter;
