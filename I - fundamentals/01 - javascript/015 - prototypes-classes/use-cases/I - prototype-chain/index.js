/**
 * Use Case: Prototype Chain
 *
 * Problem:
 * Multiple objects need to share the same behavior
 * without duplicating it on every object.
 *
 * What You'll Learn:
 * - Prototype-based inheritance
 * - Property lookup through the prototype chain
 */

const vehicle = {
  start() {
    console.log(`${this.name} is starting.`);
  },
};

const car = Object.create(vehicle);
car.name = "Car";

const motorcycle = Object.create(vehicle);
motorcycle.name = "Motorcycle";

car.start();
motorcycle.start();

console.log(Object.getPrototypeOf(car) === vehicle);

/*
Expected Output

Car is starting.
Motorcycle is starting.
true
*/