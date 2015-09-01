(function customersControllerIIFE(){

  // Controller
  var CustomersController = function($scope){
    this.sortBy = "name";
    this.reverse = false;
  };

  CustomersController.prototype.doSort = function(propName){
    this.sortBy = propName;
    this.reverse = !this.reverse;
  };

  // The Controller is part of the module.
  angular.module('customersApp')
    .controller('customersController', CustomersController);

})();
