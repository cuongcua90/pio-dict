'use strict';

angular.module('pioDictApp')
.factory('dictFactory', function (config, $http) {
    // Service logic
    // ...
    // Public API here
    return {
        googleAutomaticTranslate: function(query, cb) {
            var data = {
                key: config.googleKey,
                source:config.langSource,
                target: config.langTarget,
                q: query
            };
            $http.get(config.googleTranslateUrl, {params:data}).success(function(res){
                cb(res.data.translations[0].translatedText);
            });
        },
        googleDictionarySearch: function(query, cb){
            var data = {
                key: config.googleDictionaryKey,
                dataset: "dictionary",
                dictionaryLanguage: "en",
                query: query
            };
            $http.get(config.googleDictionaryUrl, {params:data}).success(function(res){
                if(res.data)
                    cb(res.data[0]);
                else{
                    cb(false);
                }
            });
        },
        duolingoSeach: function(query, cb){
            var url = "https://d.duolingo.com/words/hints/en/vi";
            var data = {
                sentence: query,
                callback: "JSON_CALLBACK",
                format: "new"
            }
            $http.jsonp(url, {params: data}).success(function(res){
                cb(res);
            });
        },
        tracauSearch: function(query, cb){
            var url = "http://api.tracau.vn/WBBcwnwQpV89/"+query+"/en/JSON_CALLBACK";
            $http.get(url).success(function(res){
                cb(res);
                console.log(res);
            });
        }
    };
});
