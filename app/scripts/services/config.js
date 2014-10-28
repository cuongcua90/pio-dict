'use strict';

angular.module('pioDictApp')
.value('config', {
    langSource:"en",
    langTarget:"vi",
    googleTranslateUrl: "https://www.googleapis.com/language/translate/v2",
    googleDictionaryUrl: "https://www.googleapis.com/scribe/v1/research",
    googleDictionaryKey: "AIzaSyDqVYORLCUXxSv7zneerIgC2UYMnxvPeqQ",
    // local
    //prefixUrl: "",
    //googleKey: "AIzaSyC7rhChLBS3VRj7hIaVJa8X-CsiZ8M0r_Y",
    // build
    prefixUrl: "/dict",
    googleKey: "AIzaSyAjLkDRFwGpQgUMRKDyQAHXSXcTt2kCBy4",
});
