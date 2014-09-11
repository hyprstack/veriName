$(document).ready(function(){
  console.log("document ready!");
  $("#search-form").submit(function(){
    var username = $("#searchname").val().trim(); // store value from searchbox
    console.log(userName);
    //send ajax request to server to check for username availability
    $.get("/"+username, function(data){
      alert("Response: " + data);
    });
  });
});
