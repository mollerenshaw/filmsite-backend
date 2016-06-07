const Schema = require('mongoose').Schema;

const schemaFile = require('./schemas/season.json');

module.exports = mongoose.model('SeasonModel', new Schema(schemaFile));
