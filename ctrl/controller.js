var app = angular.module("mainApp", ['ngRoute',])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'login_page.html'
                })
                .when('/seating', {
                    templateUrl: 'seating.html'
                })
                .otherwise({
                    redirectTo: '/'

                });

        }]);
