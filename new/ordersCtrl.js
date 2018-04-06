angular.module("", ["ngRoute"])

  .config('$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/orders_partials/Page1.html'
      })
      .when('/Page2', {
        templateUrl: 'partials/orders_partials/Page2.html'
      })
      .when('/Page3', {
        templateUrl: 'partials/orders_partials/Page3.html'
      })

      .otherwise({
        redirectTo: '/'
      })
  ;

  });