'use strict';

var request = require('request');
var expect = require('chai').expect;

module.exports = function () {

  var returnedResources;

  this.Before(function() {
    // Delete all the seasons before the tests run.
    var url = resourceUrl("season");
    request.delete(url);
  });

  this.After(function() {
    // Delete all the seasons after the tests run.
    var url = resourceUrl("season");
    request.delete(url);
  });

  this.Given(/^the system knows about the following (.+)s:$/, function (resourceType, resourcesToCreate, callback) {

    var url = resourceUrl(resourceType);

    var rows = resourcesToCreate.hashes();
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];

      var options = {
        url: url,
        json: {
          title: row.title,
          description: row.description
        }
      };
        
      request.post(options);
    }

    // Always finish with a call to callback().
    callback();
  });

  this.When(/^the client requests a list of (.+)s$/, function (resourceType, callback) {

    var url = resourceUrl(resourceType);

    var cb = function (error, response, body) {

      if (!error && response.statusCode == 200) {
        returnedResources = JSON.parse(body);
      }
      callback();
    };
      
    request(url, cb);

  });
    
  this.Then(/^the response is a list containing (\d+) (.+)s$/, function (resourceCount, resourceType, callback) {
 
    console.log("Then there should be " + resourceCount + " " + resourceType + "s.");

    expect(returnedResources.length).to.equal(parseInt(resourceCount));
      
    // Always finish with a call to callback().
    callback();
  });

  this.Then(/^one (.+) has the following attributes:$/, function (resourceType, attributes, callback) {
 
    console.log("ATTRS");
      
    // Always finish with a call to callback().
    callback();
  });
    
  /**
   * Constructs HTTP options for a request of a given type against a given end point.
   */
  var resourceUrl = function(resourceType) {

    return 'http://192.168.99.100:8080/api/' + resourceType;

  };
};
