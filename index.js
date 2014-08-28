var Hapi = require('hapi');
var request = require('request');


var server = Hapi.createServer('localhost', 8080);

server.route(
  {
    path: '/{username}',
    method: 'GET',
    handler: function (req, reply){

<<<<<<< HEAD
        request('http://twitter.com/' + req.params.username, function(error, response, body){
        console.log(response.statusCode);

        if ( response.statusCode === 404 ) {
          console.log( "Username " + req.params.username + " is available!" );
          reply({"available":"yes"});
        }

        if ( response.statusCode === 200 ) {
          console.log( "Username " + req.params.username + " is already taken!" );
=======
      request('http://twitter.com/' + req.params.username, function(error, response, body){
        console.log(response.statusCode);
        // if ( error ){
        //   throw error; // why are you throwing an error...? Do you want your app to crash?
        // }
        if ( response.statusCode === 404 ) {
          console.info( "Username " + req.params.username + " is available!" );
          reply({"available":"yes"});
        }
        if ( response.statusCode === 200 ) {
          console.error( "Username " + req.params.username + " is already taken!" );
>>>>>>> 5b595901285bcca17edca4bfb642b345866cbf54
          reply({"available":"no"});
        }
      });
    }
  }
);


server.start(function() {
    console.log("Server started", server.info.uri);
});

<<<<<<< HEAD
=======
// if (!module.parent) {
    server.start(function() {
        // console.log("Server started", server.info.uri);
    });
// }
>>>>>>> 5b595901285bcca17edca4bfb642b345866cbf54

module.exports = server;
