'use strict';

/**
 * @ngdoc overview
 * @name workspaceApp
 * @description
 * # workspaceApp
 *
 * Main module of the application.
 */
angular
  .module('workspaceApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/movielookup/:movielookupID', {
        templateUrl: 'views/movielookup.html',
        controller: 'MovielookupCtrl',
        controllerAs: 'movielookup'
      })
       .when('/sunburst/:movieID', {
        templateUrl: 'views/sunburst.html',
        controller: 'SunburstCtrl',
        controllerAs: 'sunburst'
      })
      .otherwise({
        redirectTo: '/'
      });
  });