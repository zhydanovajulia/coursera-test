(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {

    this.list = ShoppingListCheckOffService.getBoughtItems();

    this.isEmpty = function() {
      return  ShoppingListCheckOffService.isEmpty(this.list);
    }
  }

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {

    this.list = ShoppingListCheckOffService.getToBuyItems();

    this.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    }

    this.isEmpty = function() {
      return  ShoppingListCheckOffService.isEmpty(this.list);
    }
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyList = [
      { name: "cookies", quantity: 10},
      { name: "eggs", quantity: 10},
      { name: "melon", quantity: 1},
      { name: "onion", quantity: 5},
      { name: "milk", quantity: 1}];

    var boughtList = [];

    service.buyItem = function (itemIndex) {
      boughtList.push(toBuyList[itemIndex]);
      toBuyList.splice(itemIndex, 1);
    };

    service.getToBuyItems = function () {
      return toBuyList;
    };

    service.getBoughtItems = function () {
      return boughtList;
    }

    service.isEmpty = function (list) {
      return list.length < 1;
    }
  }

})();
