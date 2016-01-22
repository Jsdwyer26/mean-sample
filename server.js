/*From GA WDI tutorial: 
https://github.com/sf-wdi-24/modules/tree/master/week-10-angular/day-04/module-01*/

//I. Require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');


// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// set view engine to hbs (handlebars)
app.set('view engine', 'hbs');

// connect to mongodb
mongoose.connect('mongodb://localhost/mean_sample');


//II.CRUD routes for resouce

//API routes 

//1. GET all...JSON response
app.get('/api/todos', function (req, res) {
  Todo.find(function (err, allTodos){
    if (err)  {
      res.status(500).json({ error: err.message });
    } else  {
      res.json(allTodos);
    }
  });
});

//2. POST to todos...JSON response
app.post('/api/todos', function (req, res)  {
  var newTodo = new Todo(req.body);
  newTodo.save(function (err, savedToDo)  {
    if (err) {
      res.status(500).json({ error: err.message });    
    } else  {
      res.json(savedToDo);
    }
  });
});
//3. GET single todo by id
app.get('/api/todos/:id', function (req, res) {

});
//4. PUT update to single todos, get by i.d.
app.put('/api/todos/:id', function (req, res) {

});
//5. DELETE a todo by, get by i.d.
app.delete('/api/todos/:id', function (req, res)  {

});

/*
* Load 'views/index.hbs' file
* when any route is requested from the server
*/

//Catch-All Route for Angular templating 
app.get('*', function (req, res) {
  res.render('index');
});



// listen on port 3000
app.listen(3000, function() {
  console.log('server started');
});