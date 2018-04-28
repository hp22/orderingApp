angular.module("mainApp")

  .controller('ordersCtrl', function ($scope, itemsFactory) {
      $scope.msg1 = "_";
      itemsFactory.getPage1Items().then(function(response) {
          $scope.foods = response.data;
      });


      //def addToOrder function
      $scope.addToOrder1 = function(food) {
          $scope.msg1 = food.name;
      };
      $scope.msg2 = "_";
      itemsFactory.getPage2Items().then(function(response) {
          $scope.foods = response.data;
      });


      //def addToOrder function
      $scope.addToOrder2 = function(food) {
          $scope.msg2 = food.name;
      };
  });
