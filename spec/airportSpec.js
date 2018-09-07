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
    spyOn(airport, 'isBadWeather').and.returnValue(false)
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.hangar()).not.toContain(plane);
  });

  describe('Weather conditions', function() {

    it('checks for Stormy (true) or Sunny (false) weather', function() {
      expect([true, false]).toContain(airport.isBadWeather());
    });

    it('takeOff is prevented if weather is stormy', function() {
      spyOn(airport, 'isBadWeather').and.returnValue(true);
      airport.land(plane);
      expect(function() {airport.takeOff()}).toThrowError('Too stormy to take off!')
      expect(airport.hangar()).toContain(plane);
    });

    it('takeOff is allowed if weather is sunny', function() {
      airport.land(plane);
      spyOn(airport, 'isBadWeather').and.returnValue(false)
      airport.takeOff(plane);
      expect(airport.hangar()).not.toContain(plane);
    });
  });
});
