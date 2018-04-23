angular.module('mainApp')
    .controller('page1Ctrl', function($scope, $http) {
        $scope.msg = "_";

        //def addToOrder function
        $scope.addToOrder = function(food){
            $scope.msg=food.name;
        };

        // read json file
        $http.get('data/page1_content.json').success(function(data) {
            $scope.foods = data;
        })
    });
