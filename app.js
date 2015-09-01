(function customersAppIIFE(ang){
  var app = ang.module('customersApp', ['ngRoute']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/',
            {
              controller: 'customersController',
              templateUrl: 'app/views/customers/customers.html'
            })
      .otherwise({redirectTo: '/'});

  });
})(angular);
