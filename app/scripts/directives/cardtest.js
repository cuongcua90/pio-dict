'use strict';

angular.module('pioDictApp')
.directive('cardTest', function (utilsFactory, $timeout, config) {
    return {
        templateUrl: config.prefixUrl+'/views/templates/cardTest.html',
        restrict: 'A',
        scope: {
            cardData: '=',
            cardId: '@',
            testType: '@',
            numQuiz: '@',
            onFinishTest: '&'
        },
        link: function postLink(scope, element, attrs) {
            scope.createQuiz = function(){
                scope.cardIdChoice = undefined;
                var quizIndexArr = utilsFactory.getRandomsArray(scope.cardData.length,scope.numQuiz,parseInt(scope.cardId));
                var randomIndex = utilsFactory.randomInteger(quizIndexArr.length+1);
                quizIndexArr.splice(randomIndex,0,parseInt(scope.cardId));
                scope.quizIndexs = quizIndexArr;
            };
            
            scope.wrongAnswer = function(quizIndex){
                return (scope.cardIdChoice!=undefined) && (scope.cardIdChoice == quizIndex) && (scope.cardIdChoice != scope.cardId);
            };
            scope.trueAnswer = function(quizIndex){
                return (scope.cardIdChoice!=undefined) && (quizIndex == scope.cardId);
            };
            scope.normalButton = function(quizIndex){
                return (scope.cardIdChoice == undefined) || (scope.cardIdChoice!=quizIndex && quizIndex!=scope.cardId);
            };
            scope.answerChoice = function(cardIdChoice){
                if(scope.cardIdChoice!=undefined) return;
                scope.cardIdChoice = cardIdChoice;
                $timeout(function(){
                    scope.onFinishTest({isTrue: scope.cardIdChoice == scope.cardId});
                },1000);
            };
            scope.createQuiz();

            scope.$watch('cardId',function(){
                scope.createQuiz();
            });
        }
    };
});
