(function ordersControllerIIFE(data, ang) {

  var OrdersController = function($routeParams) {
    var customerId = $routeParams.customerId;
    this.orders = null;

    // private function, not available outside of IIFE
    function init() {
      // Search for the customer by id
      for (var i = 0, len = this.customers.length; i < len; i++) {
        if (this.customers[i].id == parseInt(customerId)) {
          this.orders = this.customers[i].orders;
          break;
        }
      }
    }

    this.customers = data;

    init();
  };

  // Prevent the minifier from breaking dependency injection.
  OrdersController.$inject = ['$routeParams'];

  // The Controller is part of the module.
  ang.module('customersApp').controller('ordersController', OrdersController);

})(customerData, angular);
