'use strict';

describe('Controller: MovielookupCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var MovielookupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovielookupCtrl = $controller('MovielookupCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MovielookupCtrl.awesomeThings.length).toBe(3);
  });
});
