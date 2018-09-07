function Airport() {
  this.landedPlanes = []
};

Airport.prototype.hangar = function() {
  return this.landedPlanes
};

Airport.prototype.land = function(plane) {
  return (this.landedPlanes.push(plane))
};

Airport.prototype.takeOff = function(plane) {
  this.landedPlanes.splice((this.landedPlanes.indexOf(plane)), 1);
}
