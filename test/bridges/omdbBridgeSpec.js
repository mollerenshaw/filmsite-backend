var expect = require("chai").expect;
var omdbBridge = require("../../lib/bridges/omdbBridge.js");


context("OMDB Bridge", function () {
  describe("#getFilmByTitle()", function () {
    it("should include the title in the options", function () {
      expect(omdbBridge.getFilmByTitle("Jaws")).to.equal("Wibble");
    });
      
    it("should refuse empty film titles", function() {
          
              
    });
  });
});
