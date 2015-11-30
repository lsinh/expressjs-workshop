// Exercise 4: Fetching Data!

// Create a web server that will respond to requests for /entry/:entryId in the following way:

// First, create a global variable called entries, which will be an object of address book entries. It could look like this:

// var entries = {
//   1: {
//     firstName: "John",
//     lastName: "Smith",
//     emails: [
//       {type: "home", address: "john@smith.com"},
//       {type: "work", address: "jsmith@megacorp.com"}
//     ]
//   },
//   // ...
// };
// When the user requests a certain entry, respond with some JSON that corresponds to the requested entry.

// If the entry was not found, respond with an appropriate error code

var express = require('express');
var app = express();
 
 var entries = {
  allan: {
    firstName: "Allan",
    lastName: "Macdonald",
    emails: [
      {type: "home", address: "allan@macdonald.com"},
      {type: "work", address: "allan2@macdonald.com"},
      ]
  },
  
  leichin: {
    firstName: "Leichin",
    lastName: "Sinha",
    emails: [
      {type: "home", address: "leichin@sinha.com"}]
  },
  
  alaric: {
    firstName: "Alaric",
    lastName: "Boyle",
    emails: [
      {type: "home", address: "alaric@boyle.com"},
      {type: "work", address: "alaric2@boyle.com"}]
  }
  
};


app.get('/entry/:entryId', function (req, res) {
  
  var entryId = req.params.entryId.toLowerCase();
  
  
    if (entries[entryId]) {
      res.json(entries[entryId]);
    }
    else {
      res.status(400).send('Error 400');
    }

  // res.json(entries[entryId]);
});







/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
