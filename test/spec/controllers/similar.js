'use strict';

describe('Controller: SimilarCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var SimilarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SimilarCtrl = $controller('SimilarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SimilarCtrl.awesomeThings.length).toBe(3);
  });
});
