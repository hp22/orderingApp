angular.module('mainApp')
  .controller('costCtrl', function ($scope, itemsFactory) {
    var order = itemsFactory.getOrder();
    $scope.total = 0.0;
    $scope.mss = "a";
    if(order.length != 0){
      $scope.msg = 'd';
    }
  });
