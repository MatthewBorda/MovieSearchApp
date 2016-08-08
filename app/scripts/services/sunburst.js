'use strict';

/**
 * @ngdoc service
 * @name workspaceApp.sunburst
 * @description
 * # sunburst
 * Factory in the workspaceApp.
 */
angular.module('workspaceApp')
  .factory('sunburst', function ($resource) {
   // Service logic
    // ...

    // Public API here
    return $resource('http://api.themoviedb.org/3/search/movie?api_key=0ee729f7a5162307774f1f09911d0b59&query=:query', {}, {
      query: {
        method:'GET',
        params:{
          id: '858' // Sleepless in Seattle
        },
        isArray:false
      }
    });
  });