'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:CastCtrl
 * @description
 * # CastCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('CastCtrl', function ($scope, $routeParams, cast) {
    $scope.castlookupID = $routeParams.castlookupID;

    $scope.castlookupData = cast.query({
        castlookupID: $routeParams.castlookupID
    });
  });