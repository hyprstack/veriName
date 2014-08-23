var Hapi = require('hapi');
var request = require('request');


var server = Hapi.createServer('localhost', 8080);

server.route(
  {
    path: '/{username}',
    method: 'GET',
    handler: function (req, reply){

      var r = request('http://twitter.com/' + req.params.username, function(error, response, body){
        console.log(response.statusCode);
        if ( error ){
          throw error;
        } else if ( response.statusCode === 404){
          console.log( "Username " + req.params.username + " is available!" );
          return response.statusCode;
        } else {
          console.log( "Username " + req.params.username + " is already taken!" );
          return response.statusCode;
        }
      });
      reply(r);
    }
});

if (!module.parent) {
    server.start(function() {
        console.log("Server started", server.info.uri);
    });
}

module.exports = server;
