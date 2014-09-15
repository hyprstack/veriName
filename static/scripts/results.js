$(document).ready(function(){
  console.log("Ready!");

  var domains=[ ];
    domains.push($(".facebook").find("a").text());
    domains.push($(".github").find("a").text());
    domains.push($(".twitter").find("a").text());
    domains.push($(".instagram").find("a").text());
    domains.push($(".pinterest").find("a").text());
  console.log(domains);


  $("#searchbutton").on('click', function(event){

    var username = $("#searchname").val().trim(); // store value from searchbox
    console.log(username);

    if(username === ""){
      event.preventDefault();
    }

    if(username){
      var newhtml = "<p>";
      newhtml += username;
      newhtml += "</p>";
      $(".username").html(newhtml);
      $(".username").remove("newhtml");

      var domainCheck = function(){
        $.ajax({
          url: "/"+username,
          type: "get",
          data: {domains: domains, username: username},
          success: function(response){
          console.log(response);
            }
        });
      };
      //send ajax request to server to check for username availability
        domains.forEach(domainCheck);
    }
  });
});
