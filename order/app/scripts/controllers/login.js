angular.module('orderApp')

  .controller('LoginCtrl', function ($scope, $location) {
    $scope.validate = function () {

      if ($scope.usrname == "hem" && $scope.pwd == "asd") {

        $location.path('/seating');

      } else {
         $location.path('/seating');


      }
    }

  });
