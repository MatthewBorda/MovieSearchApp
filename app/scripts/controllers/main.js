'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workspaceApp
 */

angular.module('workspaceApp')
  .controller('MainCtrl', function ($scope, moviesearch) {
     $scope.moviesFound = moviesearch.find();

    $scope.findMovies = function(){
        $scope.moviesFound = moviesearch.find({
            query: $scope.movieName
        });
        $scope.searchQuery = $scope.movieName;
    };
  });
