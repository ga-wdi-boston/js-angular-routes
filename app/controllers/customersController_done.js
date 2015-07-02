(function customersControllerIIFE(data, ang){

  // Controller
  var CustomersController = function($scope){
    $scope.sortBy = "name";
    $scope.reverse = false;

    $scope.doSort = function(propName){
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };

    $scope.customers= data;
  };

  // The Controller is part of the module.
  ang.module('customersApp').controller('customersController', CustomersController);

})(customerData, angular);
