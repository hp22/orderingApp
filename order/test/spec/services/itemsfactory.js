'use strict';

describe('Service: itemsFactory', function () {

  // load the service's module
  beforeEach(module('orderApp'));

  // instantiate service
  var itemsFactory;
  beforeEach(inject(function (_itemsFactory_) {
    itemsFactory = _itemsFactory_;
  }));

  it('should do something', function () {
    expect(!!itemsFactory).toBe(true);
  });

});
