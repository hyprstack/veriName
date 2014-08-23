var Lab = require("lab");
var lab = exports.lab = Lab.script();
var server = require('../'); // require index.js
var request = require('request');

lab.experiment( "Test Username Existence", function() {
  // tests

  lab.test( "Test username exists", function(done){

      request('http://twitter.com/BarackObama', function(error, response, body){
        Lab.expect(response.statusCode).to.equal(201);
      });
          done();
    });

    lab.test("Test username does not exists", function(done){

        request('http://twitter.com/jhkhksdhkjahsdfkjhasdf', function(error, response, body){
          Lab.expect(response.statusCode).to.equal(404);
        });
          done();
      });

  });
