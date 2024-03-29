'use strict';

angular.module('orderApp')
  .controller('CostCtrl', function($scope, itemsFactory) {
    $scope.total = 0.0;
    $scope.itemObj = itemsFactory.getItemObject();

    $scope.orderList = {};
    $scope.dict = {};

    //watch for changes
    $scope.$watch(function() {
        return itemsFactory.flag;
      },
      function() {
        $scope.itemObj = itemsFactory.getItemObject();
        if ($scope.itemObj.price) {
          $scope.total += parseFloat($scope.itemObj.price);
          if ($scope.orderList.hasOwnProperty($scope.itemObj.name)) {
            $scope.orderList[$scope.itemObj.name][1] += 1;
          } else {
            $scope.orderList[$scope.itemObj.name] = [$scope.itemObj.price, 1];

          }

        }
      });

    $scope.editList = function(key) {
      var old_no = $scope.orderList[key][1];

      var no = parseInt(prompt("Enter the no:", $scope.orderList[key][1]));

      if (isFinite(no)) {
        var difference = no - old_no;
        difference *= $scope.orderList[key][0];
        $scope.total += difference;
        $scope.orderList[key][1] = no;
      }

      if ($scope.orderList[key][1] == 0) {
        delete $scope.orderList[key];
      }
    };
  
    $scope.clearOrderList = function() {
      if (confirm("Do you want to clear the order list?")) {
        $scope.orderList = {};
        $scope.total = 0;
      }
    }

  });
