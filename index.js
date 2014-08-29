var Hapi = require('hapi');
var request = require('request');


var server = Hapi.createServer('localhost', 8080);

server.route(
  {
    path: '/{username}',
    method: 'GET',
    handler: function (req, reply){

        request('http://twitter.com/' + req.params.username, function(error, response, body){
        console.log(response.statusCode);

        if ( response.statusCode === 404 ) {
          console.log( "Username " + req.params.username + " is available!" );
          reply({"available":"yes"});
        }

        if ( response.statusCode === 200 ) {
          console.log( "Username " + req.params.username + " is already taken!" );
          reply({"available":"no"});
        }
      });
    }
  }
);


server.start(function() {
    console.log("Server started", server.info.uri);
});


module.exports = server;
