$(document).ready(function() {
  
  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var new_burger = $("#new_burger").val().trim();
    if(new_burger ===""){
      return;
    }
    else{
      $.ajax({
      method: "POST",
      url: "/api/burgers/",
      data: {
        burger_name: new_burger
      }
    }).then(function(data) {
      // reload page to display updated list
      location.reload();
    });
    }
    console.log(new_burger);
    
  });

  $(".change-devoured").on("click", function(event){
    var id = $(this).attr("data-id");
    var devouredState = $(this).attr("data-devoured");

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data:{
        devoured: devouredState
      } 
    }).then(
      function() {
        // Reload the page to put devoured in proper column
        location.reload();
      }
    );
  })

});