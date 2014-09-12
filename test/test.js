var Lab = require("lab");
var lab = exports.lab = Lab.script();
var server = require('../'); // require index.js
var request = require('request');


lab.experiment( "Test username existence", function() {
  // tests

  lab.test("Expect status code 200 for name that is taken", function(done){

    var options = {
      method: 'GET',
      url: '/timmy'
    };
    //server inject lets you simulate an http request
    server.inject(options, function(response){
      Lab.expect(response.statusCode).to.equal(200);
      Lab.expect(response.result.available).to.equal("no");
      done();
    });
  });

  lab.test("Expect status code 400 for a name that is still available", function(done){

    var options = {
      method: 'GET',
      url: '/sdlkjflsajdfljalskjfjkhkjhd'
    };
    //server inject lets you simulate an http request
    server.inject(options, function(response){
      Lab.expect(response.statusCode).to.equal(200);
      Lab.expect(response.result.available).to.equal("yes");
      done();
    });
  });

  lab.test("Render index.html file as home page", function(done){
    var options = {
      method: 'GET',
      url: '/',
      handler: {file: 'index.html'}
    };
    //server inject lets you simulate an http request
    server.inject(options, function(response){
      Lab.expect(response.result).to.equal('index.html');
    });
  });
});
