'use strict';

describe('Service: sunburst', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var sunburst;
  beforeEach(inject(function (_sunburst_) {
    sunburst = _sunburst_;
  }));

  it('should do something', function () {
    expect(!!sunburst).toBe(true);
  });

});
