//I. Configure Angular app(sampleApp = index.hbs)
var app = angular.module('sampleApp', ['ngRoute']); 

app.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider)  {
    $routeProvider
      .when('/',  {
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
      });

    $locationProvider.html5Mode({
      enbabled: true,
      requireBase: false
    });    
  }
]);

//Resources for todo.
app.factory('Todo', ['$resouce', function ($resouce){
  return $resource('/api/todos/:id', { id: '@_id'}, 
  { 
    'update': {method: 'Put'}
    });
  // $resource function exposes all five RESTful methods/routes
    // { 'get'   : { method: 'GET'                },
    //   'save'  : { method: 'POST'               },
    //   'query' : { method: 'GET', isArray: true },
    //   'remove': { method: 'DELETE'             },
    //   'delete': { method: 'DELETE'             } };
}]);

//Configure controller, HomeCtrl
app.controller('TodosIndexCtrl', ['$scope', 'Todo', function ($scope, Todo){
  $scope.homeTest= "Welcome to homepage!";
  $scope.todos=Todo.query();
  $scope.todo = {};

  $scope.createTodo = function() {
    var newTodo = Todo.save($scope.todo);
    $scope.todo = {};
    $scope.todos.unshift(newTodo); 
  };

  $scope.markDone = function(todo)  {
    todo.done = (todo.done ? false : true);
    Todo.update(todo);
  };

  $scope.updateTodo = function(todo)  {
    Todo.update(todo);
    todo.editForm = false;
  };
   $scope.deleteTodo = function(todo)  {
    Todo.remove({  id: todo._id });
    var todoIndex = $scope.todos.indexOf(todo);
    $scopes.todos.spiclie(todoIndex, 1);
   };
}]);