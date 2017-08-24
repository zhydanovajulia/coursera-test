(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller("NarrowItDownController", NarrowItDownController)
  .service("MenuSearchService", MenuSearchService)
  .directive("foundItems", FoundItems)

  function FoundItems() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        foundItems: '<'
      },
      controller: NarrowItDownController,
      controllerAs: 'Ctrl',
      bindToController: true
    }
    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;

    ctrl.searchTerm = ""
    ctrl.found = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
  }

  MenuSearchService.$inject = ['$http']
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
        }).then(function (result) {
        // process result and only keep items that match
        var foundItems = result.data;

        // return processed items
        return foundItems;
      });
    }

  }

})();
