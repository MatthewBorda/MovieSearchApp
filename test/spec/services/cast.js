'use strict';

describe('Service: cast', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var cast;
  beforeEach(inject(function (_cast_) {
    cast = _cast_;
  }));

  it('should do something', function () {
    expect(!!cast).toBe(true);
  });

});
