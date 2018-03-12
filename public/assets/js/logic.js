$(document).ready(function() {
    
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      var new_burger = $("#new_burger").val().trim();
      console.log(new_burger);
      $.ajax({
        method: "POST",
        url: "/api/burgers/",
        data: {
          burger_name: new_burger
        }
      }).then(function(data) {
        // reload page to display devoured burger in proper column
        location.reload();
      });
    });
  });

  