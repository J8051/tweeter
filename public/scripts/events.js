$(document).ready(function() {

  $(".new-tweet form").submit(function(event) {
    event.preventDefault();

    $.ajax({
      method: "POST",
      url: "/tweets",
      type: "application/json",
      data: $(this).serialize(),
      success: function() {
        $("textarea").val("");
        $.get("http://localhost:8080/tweets", data => {
          const newTweet = [data.slice(-1).pop()];
          renderTweets(newTweet);
        });
      }
    });

  });





















}); 