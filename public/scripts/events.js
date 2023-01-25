$(document).ready(function() {

  $(".new-tweet form").submit(function(event) {
    event.preventDefault();

    if (!$("textarea").val()) {
      alert("Oops! Your tweet is empty. Please add some text");
    } else if ($("textarea").val().length > 140) {
      alert("Oops! Your tweet is too long. The character limit is 140");
    } else {
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