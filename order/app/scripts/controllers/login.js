angular.module('orderApp')

  .controller('LoginCtrl', function ($scope, $location) {
    $scope.user = "_";
    $scope.var = 1;
    $scope.validate = function () {
      $scope.var += 1;


      if ($scope.usrname == "asd" && $scope.pwd == "asd") {

        $location.path('/seating');

      } else {
        $scope.user = "new";


        
        $location.path('/seating');

      }
    }



  });
