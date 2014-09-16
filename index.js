var Hapi = require('hapi');
var request = require('request');

var server = Hapi.createServer('localhost', 8080);



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
// this is not working. the domain name is not being received from the client side. instead its passing undefined!
      request('http://www.'+ req.query.domainName +'.com/' + req.params.username, function(error, response, body){
        // console.log('http://www.'+ req.query.domainName +'.com/' + req.params.username); //This does not work for facebook - always returns a 200 response
        // console.log("Request received");
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
