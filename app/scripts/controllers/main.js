'use strict';

angular.module('pioDictApp')
.controller('MainCtrl', ['$scope','dictFactory', 'localStorageService','wordRemember','$speechSynthetis','config',function ($scope, dictFactory, localStorageService, wordRemember, $speechSynthetis, config) {
    $scope.wordRemember = wordRemember;
    $scope.prefixUrl = config.prefixUrl;
    $scope.wordHistory = $scope.wordRemember.get("word-history");
    $scope.dictSearch = function(){
        var numCallback = 0;
        dictFactory.googleAutomaticTranslate($scope.query, function(text){
            $scope.googleTranslateResult = text;
            numCallback ++;
            if(numCallback===2){
                $scope.addWord();
            }
        });
        dictFactory.googleDictionarySearch($scope.query, function(res){
            $scope.googleDictionaryResult = res;
            if(res){
                $scope.queryText = $scope.googleDictionaryResult.dictionary.word;
            }
            else $scope.queryText = $scope.query;
            numCallback ++;
            if(numCallback===2){
                $scope.addWord();
            }
        });
        //dictFactory.duolingoSeach($scope.query, function(res){
            //$scope.duolingoSearchResult = res;
            //console.log(res);
        //});
/*        dictFactory.tracauSearch($scope.query, function(res){*/
            //$scope.tracauResult = res;
            //console.log(res);
        /*});*/
    };
    $scope.isRemembered = function(word){
        return wordRemember.inWordList(word);
    };
    $scope.addWord = function(){
        if($scope.isRemembered($scope.queryText)!=-1){
            console.log('remembered');
            return false;
        }
        var word = {
            word: $scope.queryText, 
            meaning: $scope.googleTranslateResult,
            box: 0
        }
        wordRemember.add(word);
    };
    $scope.speak = function(query){
        $speechSynthetis.speak(query,'en-US');
    }
}]);
