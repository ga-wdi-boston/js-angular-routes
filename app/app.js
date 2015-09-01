(function customersAppIIFE(ang){
  var app = ang.module('customersApp', ['ngRoute']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/',
            {
              controller: 'customersController',
              controllerAs: 'custCtrl',
              templateUrl: 'app/views/customers.html'
            }
           )
      .otherwise({redirectTo: '/'});
  });
})(angular);
