(function customersControllerIIFE(data, ang) {

  var CustomersController = function() {

    this.sortBy = "name";
    this.reverse = false;

    this.customers = data;
  };

  CustomersController.prototype.doSort = function(propName) {
    this.sortBy = propName;
    this.reverse = !this.reverse;
  };

  ang.module('customersApp').controller('customersController', CustomersController);

})(customerData, angular);
