angular.module('mainApp')
    .controller('page1Ctrl', function($scope, $http, page1Factory) {
        $scope.msg = "_";
        // $scope.foods = page1Factory.getData();

        //def addToOrder function
        $scope.addToOrder = function(food){
            $scope.msg=food.name;
        };

        // read json file
        $http.get('data/page1_content.json').success(function(data) {
            $scope.foods = data;
        })
    });
