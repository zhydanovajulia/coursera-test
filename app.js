(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.menu = ""
    $scope.message = ""
    // console.log($scope.message)
    $scope.check = function() {
      if ($scope.menu.length > 0) {
        // console.log($scope.menu)
        var amount = $scope.menu.split(',').filter(function(n){ return n != " " && n != "" }).length
        if (amount > 3 ) {
         $scope.message = "Too much!"
        } else if (amount <= 3 && amount > 0) {
          $scope.message = "Enjoy!"
        } else {
          $scope.message = "Please enter data first"
        }
      }
    }
  }

})();
