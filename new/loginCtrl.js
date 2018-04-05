
angular.module('mainApp',[])

.controller('loginCtrl', function($scope){
alert('button pressed');
    $scope.txt = "hello";
    $scope.validate = function() {
        $scope.usrname = "hello";
        // alert('button pressed');
        // if ($scope.usrname == "a" && $scope.pwd == "a") {
        //     alert("Wrong Username or Password!!");
        // } else {
        //     // $state.go('seating');
        // }
    };
});
