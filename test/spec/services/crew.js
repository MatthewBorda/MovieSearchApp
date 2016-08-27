'use strict';

describe('Service: crew', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var crew;
  beforeEach(inject(function (_crew_) {
    crew = _crew_;
  }));

  it('should do something', function () {
    expect(!!crew).toBe(true);
  });

});
