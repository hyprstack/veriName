var Hapi = require('hapi');
var request = require('request');


var server = Hapi.createServer('localhost', 8080);

var routes =[
  {
    path: '/{username}',
    method: 'GET',
    handler: function (req, reply){

      request('http://' + req.hostname + '/' + req.params.username, function(error, response, body){
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
    }
  }
];

server.route(routes);

server.start(function() {
    console.log("Server started", server.info.uri);
});


module.exports = server;
