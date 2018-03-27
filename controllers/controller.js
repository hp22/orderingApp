angular.module("mainApp", ['ngRoute'])

  .config(['$routeProvider',
        function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'partials/login_page.html'
        })
        .when('/seating', {
          templateUrl: 'partials/seating.html'
        })
        .when('/orders', {
          templateUrl: 'partials/orders.html'
        })
      //        .when('/Page1', {
      //          templateUrl: 'partials/orders_partials/Page1.html'
      //        })
      //        .when('/Page2', {
      //          templateUrl: 'partials/orders_partials/Page2.html'
      //        })
      //        .when('/Page3', {
      //          templateUrl: 'partials/orders_partials/Page3.html'
      //        })


      //        .otherwise({
      //          redirectTo: '/'
      //
      //        })
      ;
        }]);
