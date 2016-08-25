'use strict';

describe('Service: moviedetail', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var moviedetail;
  beforeEach(inject(function (_moviedetail_) {
    moviedetail = _moviedetail_;
  }));

  it('should do something', function () {
    expect(!!moviedetail).toBe(true);
  });

});
