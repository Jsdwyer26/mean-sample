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

//Configure controller, HomeCtrl
app.controller('HomeCtrl', ['$scope', function ($scope){
  $scope.homeTest= "Welcome to homepage!";
}]);