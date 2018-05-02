'use strict';

describe('Controller: SeatCtrl', function () {

  // load the controller's module
  beforeEach(module('orderApp'));

  var SeatCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SeatCtrl = $controller('SeatCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
