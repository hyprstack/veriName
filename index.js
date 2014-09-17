var Hapi = require('hapi');
var request = require('request');

var server = Hapi.createServer(process.env.PORT || 8080);



var routes =[
  {
    path: "/",
    method: "GET",
    handler: function (req, reply){
      console.log("Home page loaded and runnning!");
      reply.file('index.html');
    }
  },
  {
    path: '/{username}',
    method: 'GET',
    handler: function (req, reply){

        // verify username availability for facebook
      if (req.query.domainName === "facebook") {

        request('http://graph.'+ req.query.domainName +'.com/' + req.params.username, function(error, response, body){
          // console.log("Request received " + req.query.domainName);
          // console.log(response.statusCode);


          if ( response.statusCode === 404 ) {
            console.log( "Username " + req.params.username + " is available on " + req.query.domainName);
            reply({"available":"yes"});
          }

          if ( response.statusCode === 200 ) {
            console.log( "Username " + req.params.username + " is already taken on " + req.query.domainName);
            reply({"available":"no"});
          }
        });

        // verify username availability for all other social networks
      } else {

        request('http://www.'+ req.query.domainName +'.com/' + req.params.username, function(error, response, body){
          // console.log("Request received "  + req.query.domainName);
          // console.log(response.statusCode);

          if ( response.statusCode === 404 ) {
            console.log( "Username " + req.params.username + " is available on " + req.query.domainName);
            reply({"available":"yes"});
          }

          if ( response.statusCode === 200 ) {
            console.log( "Username " + req.params.username + " is already taken on " + req.query.domainName);
            reply({"available":"no"});
          }
        });
      }
    }
  },
  {
    method: 'GET',
    path: '/static/{param*}',
    handler: {
        directory: {
            path: 'static'
        }
    }
  }
];

server.route(routes);

server.start(function() {
    // console.log("Server started", server.info.uri);
});


module.exports = server;
