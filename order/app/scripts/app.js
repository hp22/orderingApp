angular.module("orderApp", [
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    // $urlRouterProvider.otherwise('/orders');
    $urlRouterProvider.otherwise('/login');

    //required for default nested ui-view with ui-sref
    $urlRouterProvider.when('/orders', '/orders/page1');

    $stateProvider
      .state('home', {
        url: '/home',
        template: '<h1>Home Page</h1>'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'views/login_page.html',
        controller: 'LoginCtrl'
      })

      .state('seating', {
        url: '/seating',
        templateUrl: 'views/seating.html',
        controller: 'SeatCtrl'
      })
      .state('orders', {
        url: '/orders',
        templateUrl: 'views/orders.html',
        controller: 'OrdersCtrl'
        // template: '<h1>hello</h1>'
      })
      .state('orders.page1', {
        url: '/page1',
        templateUrl: 'views/page1.html',
        controller: 'OrdersCtrl'
      })
      .state('orders.page2', {
        url: '/page2',
        templateUrl: 'views/page2.html',
        controller: 'OrdersCtrl'
      })
      .state('orders.page3', {
        url: '/page3',
        templateUrl: 'views/page3.html',
        controller: 'OrdersCtrl'
      });

  });
