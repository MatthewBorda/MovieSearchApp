'use strict';

describe('Service: movieLookup', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var movieLookup;
  beforeEach(inject(function (_movieLookup_) {
    movieLookup = _movieLookup_;
  }));

  it('should do something', function () {
    expect(!!movieLookup).toBe(true);
  });

});
