angular.module("mainApp", ['ui.router'])

  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login_page');

    $stateProvider

      .state('/', {
        templateUrl: '/partials/login_page.html'
      });
//      .state('seating', {
//        templateUrl: '/partials/seating.html'
//      })
//      .state('orders', {
//        templateUrl: '/partials/orders.html'
//      });

  });
