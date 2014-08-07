(function songsControllerIIFE(){

  
  var SongsController = function($scope){
    $scope.songs = [
    {title: "Let it Be", artist: 'Beatles', duration: 180, price: 1.99},
    {title: "Golden Age", artist: 'Beck', duration: 173, price: 2.99},
    {title: "Freeway Jam", artist: 'Jeff Beck', duration: 234, price: 1.49}
    ];

    $scope.sortBy = "title";
    $scope.reverse = false;

    $scope.doSort = function(propName){
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    }; // end of doSort
  }; 

  // Prevent minification problems
  SongsController.$inject = ['$scope'];

  // Register this Songs Controller
  angular.module('customersApp').controller('songsController', SongsController);

})();
