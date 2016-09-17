(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.menu = ""
    $scope.message = ""
    console.log($scope.message)
      $scope.check = function() {
        if ($scope.menu.length > 0) {
          $scope.message = checkString($scope.menu)
        } else {
          $scope.message = "Please enter data first"
        }
      }
  }

  function checkString(menu) {
    var amount = menu.split(',').filter(function(n){ return n != " " && n != "" }).length
    if (amount > 3) {
      return "Too much!"
    } else {
      return "Enjoy!"
    }
  }

})();
