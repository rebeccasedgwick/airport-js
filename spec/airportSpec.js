'use strict';

describe('Feature tests', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('planes can land at an airport', function() {
    airport.land(plane);
    expect(airport.hangar()).toContain(plane);
  });

});
