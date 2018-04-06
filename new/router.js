angular.module("mainApp", ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('home', {
                url: '/home',
                template: '<h3>This is home page</h3>'
            })
            .state('login', {
                url: '/login',
                // template: ...;
                templateUrl: 'login_page.html',
                controller: 'loginCtrl'
                // template: '<h1>{{txt}}</h1>'
            })
            .state('seating', {
                url: '/seating',
                templateUrl: 'seating.html',
                controller: 'seatCtrl'
                // template: '<h1>hello</h1>'
            });

    })

    .controller('loginCtrl', function($scope, $state) {
        $scope.validate = function() {
            if ($scope.usrname == "a" && $scope.pwd == "a") {
                alert("Wrong Username or Password!!");
            } else {
                $state.go('seating');
            }
        };
    })

    .controller("seatCtrl", function($scope) {
        var no_of_people = Number(prompt('Please enter the no of people:'));

        // $scope.addPeople = function(no){
        //     alert(no);
        // }
        // $scope.tables = [];

        // class table {
        //     constructor(t_no, no) {
        //         this.table_no = t_no;
        //         this.no_of_people = no;
        //         this.order = [];
        //     }
        // }
        $scope.addPeople = function(table_no) {
            var no_of_people = Number(prompt('Please enter the no of people:'));

            // if (!isNaN(no_of_people) && no_of_people > 0) {
            //     //        alert(table_no);
            //     $location.path('/orders');
            // } else {
            //     alert('Error!!!');
            // }
            // $scope.tables.push(new table(Number(table_no), no_of_people));


        };

    });
