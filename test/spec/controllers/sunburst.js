'use strict';

describe('Controller: SunburstCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var SunburstCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SunburstCtrl = $controller('SunburstCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SunburstCtrl.awesomeThings.length).toBe(3);
  });
});
