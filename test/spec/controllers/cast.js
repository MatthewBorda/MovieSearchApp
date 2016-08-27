'use strict';

describe('Controller: CastCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var CastCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CastCtrl = $controller('CastCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CastCtrl.awesomeThings.length).toBe(3);
  });
});
