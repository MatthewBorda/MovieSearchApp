'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:SimilarCtrl
 * @description
 * # SimilarCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('SimilarCtrl', function ($scope, $routeParams, similar) {
    $scope.similarlookupID = $routeParams.similarlookupID;

    $scope.similarlookupData = similar.query({
        similarlookupID: $routeParams.similarlookupID
    });
  });