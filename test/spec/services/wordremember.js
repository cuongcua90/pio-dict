'use strict';

describe('Service: wordRemember', function () {

  // load the service's module
  beforeEach(module('pioDictApp'));

  // instantiate service
  var wordRemember;
  beforeEach(inject(function (_wordRemember_) {
    wordRemember = _wordRemember_;
  }));

  it('should do something', function () {
    expect(!!wordRemember).toBe(true);
  });

});
