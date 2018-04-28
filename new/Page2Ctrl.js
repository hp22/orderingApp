angular.module('mainApp')
    .controller('page2Ctrl', function($scope, itemsFactory) {

        $scope.msg = "_";

        itemsFactory.getPage2Items().then(function(response) {
            $scope.foods2 = response.data;
        });
        // $scope.foods = itemsFactory.getPage2Items();



        //def addToOrder function
        $scope.addToOrder = function(food) {
            $scope.msg = food.name;
        };

        // read json file
        // $http.get('data/page1_content.json').success(function(data) {
        //     $scope.foods = data;
        // })
    });
