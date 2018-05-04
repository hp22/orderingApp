angular.module('mainApp')
    .controller('page1Ctrl', function($scope, itemsFactory) {

        $scope.msg2 = "_";
        itemsFactory.getPage1Items().then(function(response) {
            $scope.foods = response.data;
        });


        //def addToOrder function
        $scope.addToOrder = function(food) {
            $scope.msg = food.name;
            itemsFactory.addToOrder(food);
        };

        // read json file
        // $http.get('data/page1_content.json').success(function(data) {
        //     $scope.foods = data;
        // })
    });
