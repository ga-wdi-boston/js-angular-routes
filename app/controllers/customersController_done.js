(function customersControllerIIFE(data, ang){

  // Controller
  var CustomersController = function($scope){
    this.sortBy = "name";
    this.reverse = false;

    $scope.doSort = function(propName){
      this.sortBy = propName;
      this.reverse = !this.reverse;
    };

    this.customers = data;
  };

  // The Controller is part of the module.
  ang.module('customersApp').controller('customersController', CustomersController);

})(customerData, angular);
