angular.module('orderApp')
  .directive('myNavigation', function() {
    return {
      restrict: 'E',
      scope: {
        item: '='
      },
      templateUrl: 'views/navigation-template.html'
    };
  });
