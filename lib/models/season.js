const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaFile = require('./schemas/season.json');

var seasonSchema = new Schema(schemaFile);

var SeasonModel = mongoose.model('SeasonModel', seasonSchema);

module.exports = SeasonModel;