// IIFE for the customers app.
(function customersAppIIFE(){

  // Defining the App module that will contain 
  // all our controllers, views, services and factories

  // Our app depend on the the ngRoute library
  var app = angular.module('customersApp', ['ngRoute']);

  app.config(function($routeProvider){
    $routeProvider
    .when('/',
      {
        controller: 'customersController',
        templateUrl: 'app/views/customers.html'
      })
    .when('/songs',{
      controller: 'songsController',
      templateUrl: 'app/views/songs.html'
    })
    .when('/orders/:customerId',{
      controller: 'ordersController',
      templateUrl: 'app/views/orders.html'
    })
    .otherwise({redirectTo: '/'});
  });

})();