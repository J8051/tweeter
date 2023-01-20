$(document).ready(function() {

  $("#tweet-text").on("keyup", function(event) { 
    
    let inputLength = $(this).val().length;

    let counter = $(this).parents("form").children("div").children("output.counter");

    counter.text(140 - inputLength); 
  
    if (inputLength>140) { 
      counter.css("color", "red"); 
    }; 
    
  })

});