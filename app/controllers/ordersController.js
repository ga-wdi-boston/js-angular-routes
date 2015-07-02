(function ordersControllerIIFE(data, ang) {

  var OrdersController = function($routeParams) {
    var customerId = parseInt($routeParams.id, 10);
    this.orders = null;
    this.customers = data;

    var findCustomer = function(custData, custId) {
      var foundCustomer;
      custData.forEach(function(customer) {
        if (customer.id === custId) {
          foundCustomer = customer;
        }
      });

      return foundCustomer;
    };

    this.orders = findCustomer(this.customers, customerId).orders;
  };

  OrdersController.$inject = ['$routeParams'];

  ang.module('customersApp').controller('ordersController', OrdersController);


})(customerData, angular);
