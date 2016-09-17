(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.check = function() {
      $scope.message = checkString($scope.menu)
    }
  }

  function checkString(menu) {
    if (menu.length > 0) {
      var amount = menu.split(',').filter(function(n){ return n != " " && n != "" }).length
      if (amount > 3) {
        return "Too much!"
      } else {
        return "Enjoy!"
      }
    }
  }

})();
