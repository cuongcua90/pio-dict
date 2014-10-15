'use strict';

angular.module('pioDictApp')
.factory('utilsFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
        randomInteger: function(num){
            return Math.floor(Math.random()*num);
        },
        inArray: function(array, number){
            for (var i = 0;i<array.length; i++){
                if(array[i]===number){
                    return true;
                }
            }
            return false;
        },
        getRandomsArray: function (num, length, forbidNum) {
            var self = this;
            var result = [];

            for (var i=0; i<length; i++){
                while(true){
                    var randomNum = self.randomInteger(num);
                    if(!self.inArray(result, randomNum) && randomNum != forbidNum){
                        result.push(randomNum);
                        break;
                    }
                }
            }            
            console.log(result);
            return result;
        }
    };
});
