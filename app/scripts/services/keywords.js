'use strict';

/**
 * @ngdoc service
 * @name workspaceApp.keywords
 * @description
 * # keywords
 * Factory in the workspaceApp.
 */
angular.module('workspaceApp')
  .factory('keywords', function ($resource) {
   // Service logic
    // ...

    // Public API here
  return $resource('https://crossorigin.me/http://api.themoviedb.org/3/discover/movie/?api_key=0ee729f7a5162307774f1f09911d0b59&include_adult=false&language=en&sort_by=popularity.desc&include_video=true&with_keywords=:keywordslookupID', {}, {
      query: {
        method:'GET',
        params:{
          keywordslookupID: '31' // Tom Hanks
        },
        isArray:false
      }
    });
  });