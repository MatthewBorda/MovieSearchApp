'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:KeywordsCtrl
 * @description
 * # KeywordsCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('KeywordsCtrl', function ($scope, $routeParams, keywords) {
    $scope.keywordslookupID = $routeParams.keywordslookupID;

    $scope.keywordslookupData = keywords.query({
        keywordslookupID: $routeParams.keywordslookupID
    });
  });