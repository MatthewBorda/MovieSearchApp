'use strict';

describe('Service: moviesearch', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var moviesearch;
  beforeEach(inject(function (_moviesearch_) {
    moviesearch = _moviesearch_;
  }));

  it('should do something', function () {
    expect(!!moviesearch).toBe(true);
  });

});
