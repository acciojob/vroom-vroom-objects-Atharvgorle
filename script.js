// Car Constructor
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Method on Car prototype
Car.prototype.getMakeModel = function() {
  return this.make + " " + this.model;
};

// SportsCar Constructor (inherits from Car)
function SportsCar(make, model, topSpeed) {
  Car.call(this, make, model); // Call Car constructor
  this.topSpeed = topSpeed;
}

// Inherit from Car prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Method on SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// ---- Test Cases ----
const car = new SportsCar("Ferrari", "Testarossa", 200);

console.log("Make & Model:", car.getMakeModel()); // Ferrari Testarossa
console.log("Top Speed:", car.getTopSpeed(), "mph"); // 200
console.log("Direct Access → Make:", car.make, ", Model:", car.model); // Ferrari, Testarossa
console.log("Inheritance Check → car instanceof SportsCar:", car instanceof SportsCar); // true
console.log("Inheritance Check → car instanceof Car:", car instanceof Car); // true
