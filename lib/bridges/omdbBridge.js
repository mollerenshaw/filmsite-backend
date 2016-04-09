var http = require("http");
var logger = require('../util/log');

exports = module.exports = {};

var OMDB_URL_ROOT = 'www.omdbapi.com';

exports.getFilmByTitle = function(title, cb) {
 
    
    // TODO: This should take a callback function that's executed when the async HTTP request completes.
    
    logger.info("Looking up the film " + title + " via the OMDB API...");
    
    var options = {
        host: OMDB_URL_ROOT,
        port: 80,
        path: '/?s=' + title + '&type=movie&plot=short&r=json',
        method: 'GET',
        agent: false
    };

    http.get(options, function(res) {
        logger.debug("Got response: " + res.statusCode);

        var body = '';
        res.on('data', function(d) {
            body += d;
        });
        res.on('end', function() {
            var parsed = JSON.parse(body);
            cb(parsed);
        });
    });

};