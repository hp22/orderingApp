angular.module('orderApp' )

.controller('LoginCtrl', function($scope, $location, $http){
    $scope.validate = function() {

//        $http.get("demo_db_con.js").then(function (response){
//            console.log(data.records);
//        });

        if ($scope.usrname == "asd" && $scope.pwd == "asd") {
             alert("Wrong Username or Password!!");
//            $location.path('/seating');

        } else {
             $location.path('/seating');
//            console.log("here");
//            $http.get("./scripts/controllers/demo_db_con.js").then(function (response){
//                console.log(response.data);
//            });
            // alert("Wrong Username or Password!!");

        }
    }
});
