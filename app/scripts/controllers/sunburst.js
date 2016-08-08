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
    $scope.id = $routeParams.id;

    $scope.sunburstData = sunburst.query({
        id: $routeParams.id
    });
  });