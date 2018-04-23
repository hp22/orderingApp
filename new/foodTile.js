angular.module('mainApp')
    .directive("foodTile", function() {
        return {
            restrict: 'E',
            scope: {
                food : "="
            },
            templateUrl : "foodTileTemplate.html"
            // template : "<h1>hello World</h1>"
        };
    });
