'use strict';

describe('Service: genres', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var genres;
  beforeEach(inject(function (_genres_) {
    genres = _genres_;
  }));

  it('should do something', function () {
    expect(!!genres).toBe(true);
  });

});
