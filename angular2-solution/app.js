(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    this.boughtList = ShoppingListCheckOffService.getBoughtItems();
    console.log(this.boughtList.length)

    this.isEmpty = function () {
      return this.boughtList.length < 1
    }
  }

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {

    this.list = ShoppingListCheckOffService.getToBuyItems();

    this.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    }

    this.isEmpty = function () {
      return this.list.length < 1
    }
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyList = [
      { name: "cookies", quantity: 10}, { name: "cookies1", quantity: 10},
      { name: "cookies2", quantity: 10}];

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
  }

})();
