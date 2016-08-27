'use strict';

describe('Controller: CrewCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var CrewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CrewCtrl = $controller('CrewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CrewCtrl.awesomeThings.length).toBe(3);
  });
});
