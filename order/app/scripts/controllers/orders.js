'use strict';

angular.module('orderApp')
  .controller('OrdersCtrl', function ($scope, itemsFactory) {
      $scope.msg1 = "_";

      itemsFactory.getItems1().then(function(response){
          $scope.items = response.data;
      });

      $scope.addItemToOrder1 = function(item){
          // $scope.msg1 = "he";
          // console.log("hello");
          $scope.msg1 = item.name;
          // itemsFactory.setTotal(parseFloat(item.price));
          itemsFactory.setItemObject(item);

      }


  });
