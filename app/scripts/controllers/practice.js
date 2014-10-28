'use strict';

angular.module('pioDictApp') .controller('PracticeCtrl', function ($scope, wordRemember, utilsFactory,Cards, config, $http) { 
    $scope.prefixUrl = config.prefixUrl;
    $scope.score = 0;
    $scope.cards = [];    
    $scope.practiceOption = 5;
    $scope.practiceStatus = "prepare";
    $scope.wordList = wordRemember.get('word-history');
    $scope.cards = angular.copy($scope.wordList.slice(0, $scope.practiceOption));
    //$scope.cards = Cards;
    $scope.preparePractice = function(){
        $scope.wordList = wordRemember.get('word-history');
        $scope.practiceStatus = "practicing";
        $scope.reviewing = false; 
        $scope.cards = angular.copy($scope.wordList.slice(0, $scope.practiceOption));
    };
    $scope.isCompleted = function(){
        for (var i = 0; i<$scope.cards.length; i++){
            if($scope.cards[i].box < 4){
                return false;
            }
        }
        return true;
    };
    $scope.nextActivity =function(){
        if($scope.isCompleted()){
            $scope.practiceStatus = "completed";
        }
        else{
            var practiceLength = $scope.cards.length;
            var randomNum;
            do {
                randomNum = utilsFactory.randomInteger(practiceLength); 
            }
            while($scope.cards[randomNum].box >3);
            $scope.cardId = randomNum;
            console.log("random number " +randomNum);
            if($scope.cards[randomNum].box === 0){
                $scope.reviewing = true;
            }
            else {
                $scope.reviewing = false;
            }
        }
    };
    $scope.selectPractice = function(){
        $scope.preparePractice(); 
        $scope.nextActivity();
    };
    $scope.onFinishReview = function(){
        if($scope.cards[$scope.cardId].box === 0){
            $scope.cards[$scope.cardId].box++;
        }
        $scope.nextActivity();
    };
    $scope.onFinishTest = function(isCorrect){
        console.log("is correct "+isCorrect);
        if(isCorrect){
            $scope.score += 10;
            $scope.cards[$scope.cardId].box++;
            if($scope.cards[$scope.cardId].box === 4){
                wordRemember.deleteWord($scope.cards[$scope.cardId].word);
            }
            if(!$scope.isCompleted()){
                $scope.nextActivity();
            }
            else{
                $scope.practiceStatus = "completed";
            }
        }
        else{
            $scope.score -= 5;
            $scope.reviewing = true;
        }
    };
});
