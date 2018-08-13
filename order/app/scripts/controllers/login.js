angular.module('orderApp')

  .controller('LoginCtrl', function ($scope, $location, $http) {
    $scope.validate = function () {


      if ($scope.usrname == "asd" && $scope.pwd == "asd") {
        $location.path('/seating');

      } else {
        $location.path('/seating');

      }
    }
  });
