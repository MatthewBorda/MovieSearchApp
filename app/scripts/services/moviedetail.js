'use strict';

/**
 * @ngdoc service
 * @name workspaceApp.moviedetail
 * @description
 * # moviedetail
 * Factory in the workspaceApp.
 */
angular.module('workspaceApp')
  .factory('moviedetail', function ($resource) {
    // Service logic
    // ...

     return $resource('http://api.themoviedb.org/3/search/movie?api_key=0ee729f7a5162307774f1f09911d0b59&query=:query&language=en&include_adult=false', {}, {
      find: {
        method:'GET',
        params:{
          query: 'Seattle'
        },
        isArray:false
      }
    });
  });