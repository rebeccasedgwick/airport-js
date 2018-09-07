function Airport() {
  this.landedPlanes = [];
};

Airport.prototype.hangar = function() {
  return this.landedPlanes
};

Airport.prototype.land = function(plane) {
  return (this.landedPlanes.push(plane))
};

Airport.prototype.takeOff = function(plane) {
  if (this.isBadWeather()) {
    throw new Error ('Too stormy to take off!');
  }
  this.landedPlanes.splice((this.landedPlanes.indexOf(plane)), 1);
};

Airport.prototype.isBadWeather = function() {
  var weather = [true, false];
  return weather[Math.floor(Math.random() * weather.length)];
};
