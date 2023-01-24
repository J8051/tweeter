/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
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
  
  const objTweet = {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
          "handle": "@SirIsaac"
        },
      "content": {
          "text": "If I have seen further it is by standing on the shoulders of giants"
        },
      "created_at": 1461116232227
  };

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];
  
  const $tweets = createTweetElement(objTweet);

  const renderTweets = function($tweets) {

    for (let tweet of $tweets) { 
      let $tweetElement = createTweetElement(tweet)
      $('#tweet-container').append($tweetElement);
      console.log($tweetElement); 
    }

  }; 

  renderTweets(data);

}); 
