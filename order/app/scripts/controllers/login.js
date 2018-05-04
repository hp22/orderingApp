angular.module('orderApp' )

.controller('LoginCtrl', function($scope, $location){
    $scope.validate = function() {
        if ($scope.usrname == "hem" && $scope.pwd == "asd") {
            alert("Wrong Username or Password!!");
        } else {
            $location.path('/seating');
        }
    }
});
