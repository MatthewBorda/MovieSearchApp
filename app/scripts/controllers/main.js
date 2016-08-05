'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workspaceApp
 */
//Basic search
// angular.module('workspaceApp')
//  .controller('MainCtrl', function ($scope, current) {
//     $scope.current = current.query();

//     $scope.refreshCurrent = function(){
//         $scope.current = current.query({
//             movieName: $scope.movieName
//         });
//     };
//   });

//Multi search
angular.module('workspaceApp')
  .controller('MainCtrl', function ($scope, moviesearch) {
     $scope.moviesFound = moviesearch.find();

    $scope.findMovies = function(){
        $scope.moviesFound = moviesearch.find({
            query: $scope.movieName
        });
        $scope.searchQuery = $scope.query;
    };
  });
