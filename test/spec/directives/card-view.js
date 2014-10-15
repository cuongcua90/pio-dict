'use strict';

describe('Directive: cardView', function () {

  // load the directive's module
  beforeEach(module('pioDictApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<card-view></card-view>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cardView directive');
  }));
});
