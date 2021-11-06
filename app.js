var tweets = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

for(var i = 0; i < tweets.length; i++){
    if(tweets[i]){
    console.log(tweets[i]);        
    } else {
        console.log(`Something went wrong!`);
    }
}
