let tweetsHTML = "<ul>";

// Array#forEach版
let appendTweet = function(tweet){
  tweetsHTML += `<li><img src = ${tweet.avatar}><b>${tweet.name}</b> ${tweet.message} <i>${tweet.tweetedAt}</i></li>`;
};
tweets.forEach(appendTweet);

tweetsHTML += "</ul>";
document.querySelector("#answer").innerHTML = tweetsHTML;

function searchAddress(tweet) {

  if(tweet.name = "太郎")
    document.querySelector("#answer").innerHTML = tweetsHTML;
}