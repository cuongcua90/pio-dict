'use strict';

angular.module('pioDictApp') .controller('PracticeCtrl', function ($scope, wordRemember, utilsFactory,Cards) { 
    $scope.prefixUrl = "/dict";
    $scope.score = 0;
    $scope.reviewing = true;
    $scope.wordList = wordRemember.get('word-history');
    $scope.cards = [];    
    $scope.practiceOption = 5;
    $scope.practiceStatus = "prepare";
    $scope.cardId = 1;
    $scope.cards = $scope.wordList.slice(0, $scope.practiceOption);
    Cards = [
            {word: 'hello', box: 0, meaning: 'xin chao'},{word:'test', box: 0, meaning: 'kiem tra'},{word:'number', box: 0, meaning: 'so'},{word:'activity', box: 0, meaning: 'hoat dong'}
        ];
    //$scope.cards = Cards;
    $scope.preparePractice = function(){
        $scope.practiceStatus = "practicing";
        $scope.reviewing = false; 
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
            if(!$scope.isCompleted()){
                console.log("next activity");
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
     $scope.nextTest= function(){
        do {
            var randomNum = utilsFactory.randomInteger(4); 
        }
        while($scope.cardsData.data[randomNum].box >3);
        $scope.cardId = randomNum;
        if($scope.cardsData.data[randomNum].box === 0){
            $scope.reviewing = true;
        }
        else {
            $scope.reviewing = false;
        }
    };

});
