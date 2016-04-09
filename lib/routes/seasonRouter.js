const express = require('express');
const logger = require('../util/log');

const seasonRouter = express.Router();

// invoked for any requested passed to this router
seasonRouter.use(function (req, res, next) {
  logger.info("Season end-point received an HTTP request: " + req.url);
  next();
});

// This is the default route that gets all resources.
seasonRouter.route('/')
  .get(function (req, res) {
    logger.info("Get all the seasons.");
    res.json({seasons: [
      {
        id: '1',
        title: 'The first season'
      },
      {
        id: '2',
        title: 'The second season'
      }
    ]});
  });

// Routes that interact with specific resources.
seasonRouter.route('/:seasonid')
  .get(function (req, res) {
    var seasonID = req.params.seasonid;
    
    logger.info("GET: season " + seasonID);
    
    var seasonID = req.params.seasonid;
    res.json({
      get: seasonID
    });
  })
  .put(function (req, res) {
    var seasonID = req.params.seasonid;
    
    logger.info("PUT: season " + seasonID);
    
    var seasonID = req.params.seasonid;
    res.json({
      put: seasonID
    });
  })
  .post(function (req, res) {
    var seasonID = req.params.seasonid;
    
    logger.info("POST: season " + seasonID);
    
    var seasonID = req.params.seasonid;
    res.json({
      post: seasonID
    });
  })
  .delete(function (req, res) {
    var seasonID = req.params.seasonid;
    
    logger.info("DELETE: season " + seasonID);

    res.json({
      delete: seasonID
    });
  });

module.exports = seasonRouter;
