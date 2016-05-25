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

    SeasonModel.find(function (err, seasons) {
      if (err) res.send(err);
      res.json(seasons);
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
  })
  .delete(function (req, res) {

    var devMode = process.env.DEV_MODE || false;
    if (devMode) {
      logger.info("DELETE: all the seasons.");

      SeasonModel.find().remove().exec();

      return res.send("Removed all!");
        
    } else {
      logger.warn("Can't delete all seasons, as dev mode is disabled.");
    }
  });

// Routes that interact with specific resources.
seasonRouter.route('/:seasonid')
  .get(function (req, res) {

    const seasonID = req.params.seasonid;
    logger.info("GET: season " + seasonID);

    return SeasonModel.findById(seasonID, function (err, season) {
      if (err) {
        return res.send(err);
      }

      if (season === null) {
        return res.status(404).send("Season " + seasonID + " doesn't exist.");
      }

      return res.send(season);
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
