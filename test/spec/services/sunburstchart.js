'use strict';

describe('Service: sunburstChart', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var sunburstChart;
  beforeEach(inject(function (_sunburstChart_) {
    sunburstChart = _sunburstChart_;
  }));

  it('should do something', function () {
    expect(!!sunburstChart).toBe(true);
  });

});
