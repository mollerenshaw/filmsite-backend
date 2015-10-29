module.exports = function () {

  var url;

  this.Given(/^an API running at (.+)$/, function (urlRoot, callback) {
      url = urlRoot;

      // Always finish with a call to callback().
      callback();
  });

  this.When(/^I submit a (GET|POST|PUT|DELETE) request to the (.+) endpoint with (.+) as the body$/, function (reqType, endpoint, reqBody, callback) {
      
    url += endpoint;
    console.log("Send " + reqBody + " to " + url + " as a " + reqType + " request.");

    // Always finish with a call to callback().
    callback();
  });

  this.Then(/^I should receive JSON$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });
};
