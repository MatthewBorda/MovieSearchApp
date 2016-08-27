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
      .when('/cast/:castlookupID', {
        templateUrl: 'views/cast.html',
        controller: 'CastCtrl',
        controllerAs: 'cast'
      })
      .when('/crew/:crewlookupID', {
        templateUrl: 'views/crew.html',
        controller: 'CrewCtrl',
        controllerAs: 'crew'
      })
      .when('/genres/:genreslookupID', {
        templateUrl: 'views/genres.html',
        controller: 'GenresCtrl',
        controllerAs: 'genres'
      })
      .when('/keywords/:keywordslookupID', {
        templateUrl: 'views/keywords.html',
        controller: 'KeywordsCtrl',
        controllerAs: 'keywords'
      })
      .when('/similar/:similarlookupID', {
        templateUrl: 'views/similar.html',
        controller: 'SimilarCtrl',
        controllerAs: 'similar'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
