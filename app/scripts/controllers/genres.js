'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:GenresCtrl
 * @description
 * # GenresCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('GenresCtrl', function ($scope, $routeParams, genres) {
    $scope.genreslookupID = $routeParams.genreslookupID;

    $scope.genreslookupData = genres.query({
        genreslookupID: $routeParams.genreslookupID
    });
  });