var expect = require("chai").expect;
var hello = require("../../lib/models/hello.js");

context("Hello", function() {
   describe("#hello()", function() {
       
       it("should multiply correctly", function(){   
           expect(hello.helloWorld(2, 3)).to.equal(6);
       });
   });
});