
angular.module('mainApp')

.controller('loginCtrl', function($scope, $state) {

    $scope.validate = function() {
        if ($scope.usrname == "a" && $scope.pwd == "a") {
            alert("Wrong Username or Password!!");
        } else {
            $state.go('seating');
        }
    }
});
