angular.module('mainApp')

    .controller('loginCtrl', function($scope, $state, $http) {
        // prompt("dfjs", "hello");
        $scope.usrname = "admin";
        $scope.pwd = "admin";

        $scope.validate = function() {
            //check if user is valid.
            var flag = false;

            for(var i= 0; i<$scope.users.length; i++) {
                if($scope.usrname == $scope.users[i].name && $scope.pwd == $scope.users[i].password) {
                    flag = true;
                    break;
                }
            }
            if(flag){
                $state.go('seating');
            }
            else{
                alert('wrong password');
            }

            // if ($scope.usrname == "a" && $scope.pwd == "a") {
            //     alert("Wrong Username or Password!!");
            // } else {
            //     $state.go('seating');
            // }
        };

        //read json file
        $http.get('data/users.json').success(function(data) {
            $scope.users = data;
        });
    });
