'use strict';

describe('Service: dictFactory', function () {

  // load the service's module
  beforeEach(module('pioDictApp'));

  // instantiate service
  var dictFactory;
  beforeEach(inject(function (_dictFactory_) {
    dictFactory = _dictFactory_;
  }));

  it('should do something', function () {
    expect(!!dictFactory).toBe(true);
  });

});
