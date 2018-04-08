
angular.module('mainApp')

.controller('loginCtrl', function($scope, $state) {
    // prompt("dfjs", "hello");

    $scope.validate = function() {

        if ($scope.usrname == "a" && $scope.pwd == "a") {
            alert("Wrong Username or Password!!");
        } else {
            $state.go('seating');
        }
    }
});
