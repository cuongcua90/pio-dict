'use strict';

angular.module('pioDictApp')
.directive('cardView', function () {
    return {
        templateUrl: '/views/templates/cardView.html',
        restrict: 'A',
        scope: {
            cardData: '=',
            cardId: '@',
            onFinishReview: '&'
        }
    };
});
