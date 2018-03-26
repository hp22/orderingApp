angular.module('mainApp')
    .controller("seatCtrl", function($scope) {
        $scope.msg = 'hello';
        $scope.tables = [];
        class table {
            constructor() {
              this.table_no;
                this.no_of_people = 1;
                this.order = [];
            }
        }

        $scope.table1 = new table();
        $scope.table2 = new table();
        $scope.table3 = new table();
        $scope.table4 = new table();
        $scope.table5 = new table();

        $scope.tables = [
            $scope.table1,
            $scope.table2,
            $scope.table3,
            $scope.table4,
            $scope.table5,
        ];
      $scope.tables.splice(0,1);
      
    });
