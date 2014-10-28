'use strict';

angular.module('pioDictApp')
.directive('cardView', function (config) {
    return {
        templateUrl:config.prefixUrl+ '/views/templates/cardView.html',
        restrict: 'A',
        scope: {
            cardData: '=',
            cardId: '@',
            onFinishReview: '&'
        }
    };
});
