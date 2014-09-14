$(document).ready(function(){
  console.log("Ready!");

  $("#searchbutton").on('click', function(){
    var username = $("#searchname").val().trim(); // store value from searchbox
    console.log(username);

    if(username){
      $("#searchresults").css("display", "block"); //reveal searchresults
      var html = "<p>";
      html += username;
      html += "</p>";
      $(".username").prepend(html); // this has the nasty effect of continuously adding the search terms to the html

      //send ajax request to server to check for username availability
      $.get("/"+username, username, function(data){
        console.log(data);
      });
    }
  });
});
