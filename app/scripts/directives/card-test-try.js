'use strict';

angular.module('pioDictApp')
  .directive('cardTestTry', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the cardTestTry directive');
      }
    };
  });
