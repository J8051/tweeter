$(document).ready(function() {
  
  $(".new-tweet form").submit(function(event) {
    event.preventDefault(); 

    $.post("http://localhost:8080/tweets", $(this).serialize()); 
    // console.log($(this).serialize()); 
  });


  

 


  













}); 