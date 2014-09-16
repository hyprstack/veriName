$(document).ready(function(){
  console.log("Ready!");

  var domains=[ ];
    domains.push($("#available .facebook").find("a").text());
    domains.push($("#available .github").find("a").text());
    domains.push($("#available .twitter").find("a").text());
    domains.push($("#available .instagram").find("a").text());
    domains.push($("#available .pinterest").find("a").text());
  // console.log(domains);


  $("#searchbutton").on('click', function(event){

    $("#available").find("div").removeClass("hidden");
    $("#unavailable").find("div").removeClass("hidden");

    var username = $("#searchname").val().trim(); // store value from searchbox
    // console.log(username);

    if(username === ""){
      event.preventDefault();
    }

    if(username){
      var newhtml = "<p>";
      newhtml += username;
      newhtml += "</p>";
      $(".username").html(newhtml);
      $(".username").remove("newhtml");

      var domainCheck = function(domainName){
        $.ajax({
          url: "/"+username,
          type: "get",
          data: {domainName: domainName, username: username},
          success: function(response){
            // console.log(domainName);
            // console.log(response.available);

                // var elem = $("#available").find("div");
              if(response.available === "yes"){
                $("#unavailable ." + domainName).addClass("hidden");
              }

              if(response.available === "no"){
                $("#available ." + domainName).addClass("hidden");
              }

            }
        });
      };

      //send ajax request to server for each domain name to check for username availability
        var len = domains.length;
        for(var i = 0; i<len; i++){
          domainCheck(domains[i]);
          // console.log(domains[i]+'\n');
        }
    }
  });
});
