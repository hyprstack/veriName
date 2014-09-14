$(document).ready(function(){
  console.log("Ready!");

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
      $(".username").html(newhtml); // this has the nasty effect of continuously adding the search terms to the html
      $(".username").remove("newhtml");
      //send ajax request to server to check for username availability
      $.get("/"+username, username, function(data){
        console.log(data);
      });
    }
  });
});
