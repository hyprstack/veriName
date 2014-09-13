$(document).ready(function(){
  console.log("Ready!");
  $("#searchbutton").on('click', function(){
    var username = $("#searchname").val().trim(); // store value from searchbox
    console.log(username);
    //send ajax request to server to check for username availability
    $.get("/"+username, username, function(data){
      console.log(data);
    });
  });
});
