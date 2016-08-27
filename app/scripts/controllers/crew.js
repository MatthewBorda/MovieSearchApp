'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:CrewCtrl
 * @description
 * # CrewCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('CrewCtrl', function ($scope, $routeParams, crew) {
    $scope.crewlookupID = $routeParams.crewlookupID;

    $scope.crewlookupData = crew.query({
        crewlookupID: $routeParams.crewlookupID
    });
  });