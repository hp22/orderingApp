angular.module('mainApp')

  .controller('loginCtrl', function ($scope, $location) {
    $scope.validate = function () {
      if ($scope.usrname == "asdf" && $scope.pwd == "asdf") {
        alert("Wrong Username or Password!!");
      } else {
        $location.path('/seating');
      }
    }
  });
