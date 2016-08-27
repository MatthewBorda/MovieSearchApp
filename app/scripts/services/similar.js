'use strict';

/**
 * @ngdoc service
 * @name workspaceApp.similar
 * @description
 * # similar
 * Factory in the workspaceApp.
 */
angular.module('workspaceApp')
  .factory('similar',  function ($resource) {
   // Service logic
    // ...

    // Public API here
  return $resource('http://api.themoviedb.org/3/movie/:similarlookupID?api_key=0ee729f7a5162307774f1f09911d0b59&append_to_response=genre,keywords,credits,similar,images,videos', {}, {
      query: {
        method:'GET',
        params:{
          similarlookupID: '858' // Sleepless in Seattle
        },
        isArray:false
      }
    });
  });