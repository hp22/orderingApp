angular.module('mainApp')
    .controller("seatCtrl", function($scope, $state) {

        // $scope.tables = [];
        // $scope.text = "hello";
        // class table {
        //     constructor(t_no, no) {
        //         this.table_no = t_no;
        //         this.no_of_people = no;
        //         this.order = [];
        //     }
        // }
        $scope.addPeople = function(table_no) {
            var no_of_people = Number(prompt('Please enter the no of people:'));
                       $state.go('orders');

            // if (!isNaN(no_of_people) && no_of_people > 0) {
            //     //        alert(table_no);
            //     $state.go('orders');
            // } else {
            //     alert('Error!!!');
            // }
            // $scope.tables.push(new table(Number(table_no), no_of_people));


        }

    });
