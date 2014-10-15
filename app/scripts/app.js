'use strict';

angular.module('pioDictApp', [
  'ngSanitize',
  'ngRoute',
  'LocalStorageModule',
  'adaptive.speech'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/practice', {
        templateUrl: 'views/practice.html',
        controller: 'PracticeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
