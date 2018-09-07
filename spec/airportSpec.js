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

  it('planes can take off from the airport', function() {
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.hangar()).not.toContain(plane);
  });


});
