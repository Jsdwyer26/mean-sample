/*From GA WDI tutorial: 
https://github.com/sf-wdi-24/modules/tree/master/week-10-angular/day-04/module-01*/

//I. Require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

//Catch-All Route for Angular templating 
app.get('*', function (req, res) {
  res.render('index');
});


// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// set view engine to hbs (handlebars)
app.set('view engine', 'hbs');

// connect to mongodb
mongoose.connect('mongodb://localhost/mean_sample');

// listen on port 3000
app.listen(3000, function() {
  console.log('server started');
});