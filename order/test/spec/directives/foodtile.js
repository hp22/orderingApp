'use strict';

describe('Directive: foodTile', function () {

  // load the directive's module
  beforeEach(module('orderApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<food-tile></food-tile>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the foodTile directive');
  }));
});
