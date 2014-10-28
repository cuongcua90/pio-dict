'use strict';

describe('Directive: cardTestTry', function () {

  // load the directive's module
  beforeEach(module('pioDictApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<card-test-try></card-test-try>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cardTestTry directive');
  }));
});
