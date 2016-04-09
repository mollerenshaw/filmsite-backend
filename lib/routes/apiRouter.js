var express = require('express');
var logger = require('../util/log');

var filmRouter = require('./filmRouter');

var apiRouter = express.Router();

// invoked for any requested passed to this router
apiRouter.use(function (req, res, next) {
  logger.info("API Received an HTTP request: " + req.url);
  next();
});

// Set up routes for our various end-points.
apiRouter.use('/film', filmRouter);

module.exports = apiRouter;
