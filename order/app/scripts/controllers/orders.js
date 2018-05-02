'use strict';

angular.module('orderApp')
  .controller('OrdersCtrl', function ($scope, itemsFactory) {
      $scope.msg = "_";

      itemsFactory.getItems1().then(function(response){
          $scope.items1 = response.data;
      });

      itemsFactory.getItems2().then(function(response){
          $scope.items2 = response.data;
      });
      
      itemsFactory.getItems3().then(function(response){
          $scope.items3 = response.data;
      });

      $scope.addItemToOrder = function(item){
          $scope.msg = item.name;
          // itemsFactory.setTotal(parseFloat(item.price));
          itemsFactory.setItemObject(item);

      }


  });
