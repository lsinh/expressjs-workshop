var express = require('express');
var app = express();

app.get('/hello/:firstName', function (req, res) {
  var firstName = String(req.params.firstName);
  res.send('Hello! ' + firstName + '!');
});

// app.get('/add/:num1/:num2', function(req, res) {
//     var solution = Number(req.params.num1) + Number(req.params.num2);
//     res.send('' + solution);
// });




/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


