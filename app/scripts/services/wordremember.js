'use strict';

angular.module('pioDictApp')
.factory('wordRemember', function (localStorageService) {
    // Service logic
    // ...
    // Public API here
    var wordList;
    return {
        get: function(key) {
            this.key = key;
            wordList = localStorageService.get(key);
            if(!wordList){
                localStorageService.set(key, []);
                wordList = localStorageService.get(key);
            }
            return wordList;
        },
        set: function(key, value) {
            this.key = key;
            localStorageService.set(key, value);
            return localStorageService.get(key);
        },
        inWordList: function(word){
            if(!wordList){
                localStorageService.set(key, []);
                wordList = localStorageService.get(key);
            }

            for (var i = 0, l = wordList.length; i < l; i ++) {
                var v = wordList[i];
                if (angular.equals(angular.lowercase(v.word), angular.lowercase(word))){
                    return i;
                }
            }         
            return -1;
        },
        add: function(wordData){
            wordList.push(wordData);
            this.set(this.key, wordList);
        },
        deleteWordByIndex: function(index){
            if(index!=-1){
                wordList.splice(index,1);
                this.set(this.key, wordList);
            }
        },
        deleteWord: function(word){
            var index = this.inWordList(word);
            this.deleteWordByIndex(index);
        },
    };

});
