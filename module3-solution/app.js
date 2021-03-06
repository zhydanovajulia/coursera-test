(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
  .directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<found',
      onRemove: '&remove'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'foundItems',
    bindToController: true
  }

  return ddo;
}

function FoundItemsDirectiveController() {}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var controller = this;

  controller.searchItem;
  controller.found;

  controller.search = function() {
    var promise = MenuSearchService.getMatchedMenuItems(controller.searchItem);
    console.log(controller.searchItem);
    promise.then(function(response) {
      controller.found = response
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  }

  controller.remove = function (itemIndex) {
    controller.found.splice(itemIndex, 1);
  };
}


MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
      var foundItems = [];
      var menuItems = result.data.menu_items
      for (var i = menuItems.length - 1; i >= 0; i--) {
        var index = menuItems[i].description.toLowerCase().indexOf(searchTerm);
        if (index != -1) {
          foundItems.push(menuItems[i])
        }
      }
      return foundItems;
    });
  }
}

})()
