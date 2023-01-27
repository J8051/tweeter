$(document).ready(function() {

  $(".new-tweet form").submit(function(event) {
    event.preventDefault();

    if (!$("textarea").val()) {
      $(".errorOne").slideDown();      
      $(".errorTwo").slideUp();
    } else if ($("textarea").val().length > 140) {
      $(".errorOne").slideUp();
      $(".errorTwo").slideDown();
    } else {
      $(".errorTwo").slideUp();
      $(".errorOne").slideUp();
      $.ajax({
        method: "POST",
        url: "/tweets",
        type: "application/json",
        data: $(this).serialize(),
        success: function() { 
          $(".counter").text(140).css("color", "black");   
          $("textarea").val("");
          $.get("http://localhost:8080/tweets", data => {
            const newTweet = [data.slice(-1).pop()];
            renderTweets(newTweet);
          });
        }
      });
    }
  });





















}); 