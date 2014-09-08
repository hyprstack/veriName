var Hapi = require('hapi');
var request = require('request');


var server = Hapi.createServer('localhost', 8080);

var routes =[
  {
    path: '/{username}',
    method: 'GET',
    handler: function (req, reply){

      request('http://twitter.com/' + req.params.username, function(error, response, body){
        console.log(response.statusCode);

        if ( response.statusCode === 404 ) {
          console.log( "Username " + req.params.username + " is available on Twitter" );
          reply({"available":"yes"});
        }

        if ( response.statusCode === 200 ) {
          console.log( "Username " + req.params.username + " is already taken on Twitter" );
          reply({"available":"no"});
        }
      });

      request('http://github.com/' + req.params.username, function(error, response, body){
        console.log(response.statusCode);

        if ( response.statusCode === 404 ) {
          console.log( "Username " + req.params.username + " is available on Github" );
          reply({"available":"yes"});
        }

        if ( response.statusCode === 200 ) {
          console.log( "Username " + req.params.username + " is already taken on Github" );
          reply({"available":"no"});
        }
      });

    request('http://pinterest.com/' + req.params.username, function(error, response, body){
      console.log(response.statusCode);

      if ( response.statusCode === 404 ) {
        console.log( "Username " + req.params.username + " is available on Pinterest" );
        reply({"available":"yes"});
      }

      if ( response.statusCode === 200 ) {
        console.log( "Username " + req.params.username + " is already taken on Pinterest" );
        reply({"available":"no"});
      }
    });

    request('http://facebook.com/' + req.params.username, function(error, response, body){
      console.log(response.statusCode);

      if ( response.statusCode === 404 ) {
        console.log( "Username " + req.params.username + " is available on Facebook" );
        reply({"available":"yes"});
      }

      if ( response.statusCode === 200 ) {
        console.log( "Username " + req.params.username + " is already taken on Facebook" );
        reply({"available":"no"});
      }
    });

    request('http://instagram.com/' + req.params.username, function(error, response, body){
      console.log(response.statusCode);

      if ( response.statusCode === 404 ) {
        console.log( "Username " + req.params.username + " is available on Instagram" );
        reply({"available":"yes"});
      }

      if ( response.statusCode === 200 ) {
        console.log( "Username " + req.params.username + " is already taken on Instagram" );
        reply({"available":"no"});
      }
    });
    }
  }
];

server.route(routes);

server.start(function() {
    console.log("Server started", server.info.uri);
});


module.exports = server;
