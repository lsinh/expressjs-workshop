var express = require('express');
var app = express();



app.get('/:operation/:num1/:num2', function(req, res) {

//the operation variable is a placeholder that will hold the id key of the operation I want to make
var operation = req.params.operation;

//I am defining my num variables here to add after the operation key
var num1 = Number(req.params.num1);
var num2 = Number(req.params.num2);


var add = num1 + num2;
var sub = num1 - num2;
var mult = num1 * num2;
var div = num1/num2;


//similarly to the addressBook this will
var operationJson = {
    add: {
        "operator": "add",
        "firstOperand" : num1,
        "secondOperand": num2,
        "solution" : add
},
    sub: {
         "operator": "sub",
        "firstOperand" : num1,
        "secondOperand": num2,
        "solution" : sub
    },
    mult: {
        "operator": "mult",
        "firstOperand": num1,
        "secondOperand": num2,
        "solution": mult
        
    },
    div: {
       "operator": "div",
       "firstOperand": num1,
       "secondOperand": num2,
       "solution": div
    }
    
};

      if (operation === 'add' || operation === 'sub' || operation === 'mult' || operation === 'div') {  
    res.json(operationJson[operation]);}
    else {
          res.status(400).send('Error 400: I cannot perform this operation');
    }


});



/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
