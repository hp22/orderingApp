'use strict';

angular.module('orderApp')
  .controller('CostCtrl', function ($scope, itemsFactory) {
    $scope.total = 0.0;
    $scope.itemObj = itemsFactory.getItemObject();

    $scope.orderList = {};
    //    $scope.orderList = {
    //      "1": 11,
    //      "2": 22,
    //      "3": 33
    //    };

    //watch for changes
    $scope.$watch(function () {
        return itemsFactory.flag;
      },
      function () {
        $scope.itemObj = itemsFactory.getItemObject();
        if ($scope.itemObj.price) {
          $scope.total += parseFloat($scope.itemObj.price);
          if ($scope.orderList.hasOwnProperty($scope.itemObj)) {
            $scope.orderList[$scope.itemObj] += 1;
          } else {
            $scope.orderList[$scope.itemObj] = 1;

          }
                    console.log($scope.itemObj.name);
        }

        //        console.log($scope.itemObj.price +" "+$scope.itemObj.name);
        //        console.log($scope.total);
      });

    $scope.editList = function (key) {
      //      $scope.orderList[key] -= 1;
      var old_no = $scope.orderList[key];

      var no = parseInt(prompt("Enter the no:", $scope.orderList[key]));

      if (isFinite(no)) {
        $scope.orderList[key] = no;
      }


      if ($scope.orderList[key] == 0) {
        delete $scope.orderList[key];
      }
    };
    $scope.clearOrderList = function () {
      if (confirm("Do you want to clear the order list?")) {
        $scope.orderList = {};
        $scope.total = 0;
      }
    }

  });
