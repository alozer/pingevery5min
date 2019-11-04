var https = require("https");
console.log("Program started.");

setInterval(function() {
    var backend = "https://hr-recruitment-backend.herokuapp.com/job";
    https.get(backend);
    console.log(backend+" Pinged.");
}, 300000); // every 5 minutes (300000)

setInterval(function() {
    var frontend = "https://hr-recruitment-frontend.herokuapp.com/";
    https.get(frontend);
    console.log(frontend+" Pinged.");
}, 300000); // every 5 minutes (300000)*/