var tweets = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

for(var i = 0; i < tweets.length; i++){
    if(tweets[i]){
    console.log(tweets[i]);        
    } else {
        console.log(`Something went wrong!`);
    }
}

var tweet = [
    {
        content: "Tweets are so cool",
        posted_at: "2021-11-06",
        username: "awsomeUser",
        age: "17"
    },
    
    {
        content: "Tweets are not cool",
        posted_at: "2020-11-06",
        username: "notawsomeUser",
        age: "27"
    },
    
    {
        content: "Tweets are so uncool",
        posted_at: "2019-11-06",
        username: "coolUser",
        age: "19"
    },
    ];
    
    console.log(tweet)