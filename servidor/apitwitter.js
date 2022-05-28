var Twitter = require('twitter');
var config = require('./config');

var client = new Twitter({
  consumer_key: config.twitter.consumer_key,
  consumer_secret: config.twitter.consumer_secret,
  bearer_token: config.twitter.bearer_token
});

exports.apitwitter = async (term) => {
  return new Promise((resolve, reject) => {
    //more params: https://developer.twitter.com/en/docs/twitter-api/v1/tweets/search/api-reference/get-search-tweets
    client.get('search/tweets', {q: term, result_type: "recent", lang: "es"}, function(error, tweets, fullresponse) {
      if(error){
        console.log(error);
        reject(error);
      } else {
        //console.log("TWEETS: ", tweets);
        resolve(tweets);
      }
  
    });
  });

  
};
