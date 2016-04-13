const express = require('express');
const logger = require('../util/log');
const mongoose = require('mongoose');
const SeasonModel = require('./../models/season');

const seasonRouter = express.Router();

// invoked for any requested passed to this router
seasonRouter.use(function (req, res, next) {
  logger.info("Season end-point received an HTTP request: " + req.url);
  next();
});

seasonRouter.route('/')
  .get(function (req, res) {
    logger.info("GET: all the seasons.");

    return SeasonModel.find(function (err, seasons) {
      if (!err) {
        return res.send(seasons);
      } else {
        return logger.error(err);
      }
    });
  })
  .post(function (req, res) {
    logger.info("POST: season " + req.body);

    var season = new SeasonModel({
      title: req.body.title
    });

    season.save(function (err) {
      if (!err) {
        return logger.info("Created a season!");
      } else {
        return logger.error(err);
      }
    });

    return res.send(season);
  });

// Routes that interact with specific resources.
seasonRouter.route('/:seasonid')
  .get(function (req, res) {
   
      const seasonID = req.params.seasonid;
      logger.info("GET: season " + seasonID);
    
      return SeasonModel.findById(seasonID, function (err, season) {
        if (!err) {
          return res.send(season);
        } else {
          return console.log(err);
        }
      });

  })
  .put(function (req, res) {
    
    const seasonID = req.params.seasonid;
    const seasonTitle = req.params.title;
    logger.info("PUT: season " + seasonID);

    return SeasonModel.findById(seasonID, function (err, season) {
      season.title = seasonTitle;
      return season.save(function (err) {
        if (!err) {
          logger.info("Updated season " + seasonID);
        } else {
          logger.error(err);
        }
        return res.send(season);
      });
    });
  })
  .delete(function (req, res) {
    const seasonID = req.params.seasonid;
    
    return SeasonModel.findById(seasonID, function (err, season) {
      return season.remove(function (err) {
        if (!err) {
          logger.info("Removed season " + seasonID);
        } else {
          logger.error(err);
        }
        return res.send(season);
      });
    });
  });

module.exports = seasonRouter;
