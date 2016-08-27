'use strict';

describe('Service: keywords', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var keywords;
  beforeEach(inject(function (_keywords_) {
    keywords = _keywords_;
  }));

  it('should do something', function () {
    expect(!!keywords).toBe(true);
  });

});
