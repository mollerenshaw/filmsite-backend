const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaFile = require('./schemas/season.json');

module.exports = mongoose.model('SeasonModel', new Schema(schemaFile));
