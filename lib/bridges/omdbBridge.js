http = require("http");

exports = module.exports = {};

var OMDB_URL_ROOT = 'http://www.omdbapi.com';

exports.getFilmByTitle = function(title) {
 
    
    // TODO: This should take a callback function that's executed when the async HTTP request completes.
    
    console.info("Looking up the film " + title + " via the OMDB API...");
    
    /*var options = {
        host: OMDB_URL_ROOT,
        port: 80,
        path: '/?t=' + title + '&type=movie',
        method: 'GET',
        agent: false
    };*/

    http.get("http://www.omdbapi.com/?t=Get+Carter&y=&plot=short&r=json", function(res) {
        console.info("Got response: " + res.statusCode);
    });

    console.info("Did the thing?");
    
    /*
    http.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
        });
    }).end();
    */
}