'use strict';

angular.module('pioDictApp')
.directive('inputTextTest', function ($timeout, config) {
    return {
        templateUrl: config.prefixUrl+'/views/templates/input-text-test.html',
        restrict: 'A',
        scope: {
            cardData: '=',
            cardId: '@',
            testType: '@',
            onFinishTest: '&'
        },
        link: function postLink(scope, element, attrs) {
            scope.createQuiz = function(){
                scope.answerText = "";
                scope.answered = false;
            };
            scope.answer = function(){
                scope.isTrue = false;
                scope.answered = true;
                if(angular.equals(angular.lowercase(scope.answerText),angular.lowercase(scope.cardData[scope.cardId].word))){
                    scope.isTrue = true;
                };
                $timeout(function(){
                    scope.onFinishTest({isTrue:scope.isTrue});
                    scope.createQuiz();

                },1000);
            } 
        }
    }
});
