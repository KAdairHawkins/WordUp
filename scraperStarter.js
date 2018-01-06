var cheerio = require("cheerio");
var request = require("request");

// First, tell the console what server.js is doing
console.log("\n***********************************\n" +
            "Grabbing every thread name and link\n" +
            "from reddit's webdev board:" +
            "\n***********************************\n");


// Making a request for reddit's "webdev" board. The page's HTML is passed as the callback's third argument
request("https://www.merriam-webster.com/", function(error, response, html) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  let $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
let results = [];

$("h4.wh-word").each(function(i, element, html){

  var word = $(element).children().text();

  results.push({
    word: word
  });

});

  console.log(results);

});
