(function customersAppIIFE(ang) {
  var app = ang.module('customersApp', ['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'customersController as custCtrl',
        templateUrl: 'app/views/customers.html'
      })
      .when('/customer/:id/orders', {
        controller: 'ordersController as ordersCtrl',
        templateUrl: 'app/views/orders.html'
      });

  });

})(angular);
