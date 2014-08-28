var Lab = require("lab");
var lab = exports.lab = Lab.script();
var server = require('../'); // require index.js
var request = require('request');

<<<<<<< HEAD
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
=======
lab.experiment( "Test Username Existence", function() {

  lab.test( "Expect 400 for a name that is taken", function(done){

    var options = {
      method: "GET",
      url: "/timmy"
    };
    // server.inject lets you similate an http request
    server.inject(options, function(response) {
      Lab.expect(response.statusCode).to.equal(200);
      Lab.expect(response.result.available).to.equal("no");
      done();
>>>>>>> 5b595901285bcca17edca4bfb642b345866cbf54
    });
  });

<<<<<<< HEAD
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
=======
  lab.test("Expect status code 200 for a name that is still available", function(done){
>>>>>>> 5b595901285bcca17edca4bfb642b345866cbf54

    var options = {
      method: "GET",
      url: "/jhkhksdhkjahsdfkjhasdf"
    };
    // server.inject lets you similate an http request
    server.inject(options, function(response) {
      Lab.expect(response.statusCode).to.equal(200);
      Lab.expect(response.result.available).to.equal("yes");
      done();
    });
  });
});
