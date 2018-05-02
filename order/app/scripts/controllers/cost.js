'use strict';

angular.module('orderApp')
  .controller('CostCtrl', function($scope, itemsFactory) {
    $scope.total = 0.0;
    $scope.itemObj = itemsFactory.getItemObject();

    $scope.orderList = [];

    //watch for changes
    $scope.$watch(function() {
        return itemsFactory.flag;
      },
      function() {
        $scope.itemObj = itemsFactory.getItemObject();
        if($scope.itemObj.price){
            $scope.total += parseFloat($scope.itemObj.price);
            $scope.orderList.push($scope.itemObj.name);
        }

        console.log($scope.itemObj.price +" "+$scope.itemObj.name);
        console.log($scope.total);
      });




  });
