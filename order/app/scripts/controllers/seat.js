angular.module('orderApp')
  .controller("SeatCtrl", function ($scope, $location) {

    $scope.tables = [];

    $scope.addPeople = function (table_no) {
      var no_of_people = Number(prompt('Please enter the no of people:'));

      if (!isNaN(no_of_people) && no_of_people > 0) {

        $location.path('/orders');
      } else {
        alert('Error!!!');
      }
    }
  });
