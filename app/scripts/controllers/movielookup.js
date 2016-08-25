'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:MovielookupCtrl
 * @description
 * # MovielookupCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('MovielookupCtrl', function ($scope, $routeParams, movieLookup) {
    $scope.id = $routeParams.movielookupID;

    $scope.movielookupData = movieLookup.query({
        movielookupID: $routeParams.movielookupID
    });
  });