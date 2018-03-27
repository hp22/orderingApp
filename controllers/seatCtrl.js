angular.module('mainApp')
  .controller("seatCtrl", function ($scope) {

    $scope.seat1 = 'Seat 1';
    $scope.seat2 = 'Seat 2';
    $scope.seat3 = 'Seat 3';
    $scope.seat4 = 'Seat 4';
    $scope.tables = [];
  
    class table {
      constructor(t_no, no) {
        this.table_no = t_no;
        this.no_of_people = no;
        this.order = [];
      }
    }
    $scope.addPeople = function (table_no) {
      var no_of_people = Number(prompt('Please enter the no of people:'));
      
      if (!isNaN(no_of_people) && no_of_people > 0) {
        alert(table_no);
      } else {
        alert('error');
      }
      $scope.tables.push(new table(Number(table_no) ,no_of_people));
      
      document.write($scope.tables[0].no_of_people);

    }

  });
