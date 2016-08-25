'use strict';

/**
 * @ngdoc service
 * @name workspaceApp.sunburstChart
 * @description
 * # sunburstChart
 * Factory in the workspaceApp.
 */
angular.module('workspaceApp')
  .factory('sunburstChart', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
