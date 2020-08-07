var fs = require('fs');
var https = require('https');
// var fetch = require('node-fetch');
const axios = require('axios');

fs.writeFile(__dirname + "/index.html", "<h1>I AM AMAZING!</h1>", function(error) {
    if(error) {
        return console.log(error);
    } else {
        return console.log("Congrats!");
    }
});

var dog2Location = "https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwi_7oX30onrAhVbZM0KHe8GCIMQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.akc.org%2Fmost-popular-breeds%2F&psig=AOvVaw0nlQRnj485hqepINC_TLOi&ust=1596908781574683"
var photoLocation = "https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg";

axios.get(dog2Location)
.then( response => {
    //write response data to disk somehow
})
.catch( error => {
    console.log(error);
});
 