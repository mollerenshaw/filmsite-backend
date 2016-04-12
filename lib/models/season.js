const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var seasonSchema = new Schema({
    title: String,
    id: String
});

var SeasonModel = mongoose.model('SeasonModel', seasonSchema);

module.exports = SeasonModel;