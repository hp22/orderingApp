angular.module('orderApp')
  .directive('foodTile', function() {
    return {
      restrict: 'E',
      scope: {
        item: '='
      },
      templateUrl: 'views/food-tile-template.html'
    };
  });
