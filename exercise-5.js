//Exercise 5: searching for data

// Create a web server that will respond to requests for 
// /entry/search followed by a query string. In this case, the endpoint 
// is static, and the query string is handled separately. The query string 
// is of the form ?param1=value&param2=value.... It helps to parametrize a 
// request to receive a different output, and the parameters/values are completely 
// arbitrary. The param/value pairs are separated by a &, and each pair uses = between 
// the param name and value. ExpressJS automatically parses the query string from the
// full URL, and makes it available to you as the query property of the HTTP Request object.
// If not, you would have to parse the query string manually inside of your request handler. 
// This will give you back the query string as a simple JavaScript object. For example 
// if the user requested /entry/search?firstName=john&lastName=smith, then you will have 
// an object with {firstName: "john", lastName: "smith}.

// Using the input from the user, search through the entries and return an array 
// of matching entries. Treat each query string parameter as an OR. In the example
// above, return all the entries where the first name contains “john” OR the last
// name contains "smith". For emails, go thru all the emails and if one of them matches 
// then you can return that entry.

var express = require('express');
var app = express();


//These are a bag of objects with id key numbers
var entries = {

  1: {
    firstName: "Allan",
    lastName: "Macdonald",
    emails: [
      {type: "home", address: "allan@macdonald.com"},
      {type: "work", address: "allan2@macdonald.com"},
      ]
  },
  
  2: {
    firstName: "Leichin",
    lastName: "Sinha",
    emails: [
      {type: "home", address: "leichin@sinha.com"}]
  },
  
  3: {
    firstName: "Alaric",
    lastName: "Boyle",
    emails: [
      {type: "home", address: "alaric@boyle.com"},
      {type: "work", address: "alaric2@boyle.com"}]
  },
  
  4: {
      firstName: "Sebastien",
      lastName: "Boyle",
      emails: [{type: "home", address: "seb@boucher.com"},
      {type: "work", address: "seb2@boucher.com"}]
  }
  
};

//This function allows us to loop through the emails property to compare whether they exist or not
function emailComp(queryEmail, userEmail) {
  
  //the userEmail in this case is simply the user's input, but the if statement searches for the speficid address at the specific index
  for (var i = 0; i < userEmail.length; i++) {
    if (userEmail[i].address === queryEmail) {
      return true;
    }
  }
  return false;
}


app.get('/entry/search', function (req, res) {
  //the results empty arrray has to stay within the app.get function to avoid creating a state in which results are stored in the empty array
  //i.e. if it was outside the function it would just keep adding more matches to the page
  
  var results = [];

 
  for (var idKey in entries) {
      if (req.query.firstName === entries[idKey].firstName || req.query.lastName === entries[idKey].lastName || emailComp(req.query.emails, entries[idKey].emails)) 
      {
      results.push(entries[idKey]);
      }
      
  }
   res.json(results);
});




/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
