// This function is working with the filter to check for any posts that are posted by a user that is under the age of 18
function checkAdult(tweet){
    if(tweet.age >=18){
        return true
    } else {
        return false
    }
}

// Making a whole bunch of tweets to test the filter and the function

var tweets = [
    {
        content: "Tweets are so cool",
        posted_at: "2021-11-06",
        username: "awsomeUser",
        age: 17
    },
    
    {
        content: "Tweets are not cool",
        posted_at: "2020-11-06",
        username: "notawsomeUser",
        age: 27
    },
    
    {
        content: "Tweets are so uncool",
        posted_at: "2019-11-06",
        username: "coolUser",
        age: 19
    },

    {
        content: "Tweets are not fun to write",
        posted_at: "2021-11-06",
        username: "Attono",
        age: 15
    },
    
    {
        content: "Tweets are not stupid",
        posted_at: "2020-11-06",
        username: "Munchall",
        age: 16
    },
    
    {
        content: "Tweets = Not Cool",
        posted_at: "2019-11-06",
        username: "SneakyTurtle",
        age: 78
    },

    {
        content: "Tweets suck",
        posted_at: "2021-11-06",
        username: "xQc",
        age: 44
    },
    
    {
        content: "Tweets are for babies",
        posted_at: "2020-11-06",
        username: "TyMonster",
        age: 13
    },
    
    {
        content: "Tweets dont fix grammar",
        posted_at: "2019-11-06",
        username: "Vital",
        age: 16
    },
        
    {
        content: "Tweets are pretty awsome",
        posted_at: "2019-11-06",
        username: "Toxism",
        age: 19
    },
    ];
    
    // Filtering through all the tweets
    tweets.filter(checkAdult)
    
    // Displaying all the tweets in console
    console.log(tweets)