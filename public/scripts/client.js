/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const createTweetElement = function(tweetObj) {
  const $tweet = $(`
  <article class="tweet">
  <header class="tweet-header">
  
    <div>
      <img src="${tweetObj["user"].avatars}" alt="icon of user's display photo">
      <span>${tweetObj["user"].name}</span>
    </div>
  
    <span> ${tweetObj["user"].handle}</span>
  </header>
  
  <div class="tweet-body">
  <p> ${tweetObj["content"].text}</p>
  </div>
  
  <footer class="tweet-footer">
    <p>${tweetObj.created_at}</p>
  
    <div>
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  
  </footer>
  
  </article>

  `);
  return $tweet;
};

const renderTweets = function($tweets) {

  for (let tweet of $tweets) {
    let $tweetElement = createTweetElement(tweet);
    $('#tweet-container').prepend($tweetElement);
    // console.log($tweetElement); 
  }

};

$(document).ready(function() {

  const loadTweets = function() {
    $.get("http://localhost:8080/tweets", (data) => {
      renderTweets(data);
    });


  };
  loadTweets();
}); 
