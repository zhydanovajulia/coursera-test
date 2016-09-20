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
          $scope.statusInput = "has-success"
          $scope.statusText = "text-success"
        } else if (amount <= 3 && amount > 0) {
          $scope.message = "Enjoy!"
          $scope.statusInput = "has-success"
          $scope.statusText = "text-success"
        } else {
          $scope.message = "Please enter data first"
          $scope.statusText = "text-danger"
          $scope.statusInput = "has-error"
        }
      } else {
        $scope.message = "Please enter data first"
        $scope.statusText = "text-danger"
        $scope.statusInput = "has-error"
      }
    }
  }

})();
