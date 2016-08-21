'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:SunburstCtrl
 * @description
 * # SunburstCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('SunburstCtrl', function ($scope, $routeParams, sunburst) {
    $scope.id = $routeParams.movieID;

    $scope.sunburstData = sunburst.query({
        movieID: $routeParams.movieID
    });
  });