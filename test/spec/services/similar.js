'use strict';

describe('Service: similar', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var similar;
  beforeEach(inject(function (_similar_) {
    similar = _similar_;
  }));

  it('should do something', function () {
    expect(!!similar).toBe(true);
  });

});
