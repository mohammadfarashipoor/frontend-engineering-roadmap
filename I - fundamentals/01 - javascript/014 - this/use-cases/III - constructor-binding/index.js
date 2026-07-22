/**
 * Use Case: Constructor Binding
 *
 * Problem:
 * When a function is used as a constructor,
 * `this` behaves differently than in a normal call.
 *
 * What You'll Learn:
 * - The `new` keyword
 * - How `this` refers to a newly created object
 */

function User(name) {
  this.name = name;
}

const user1 = new User("Ali");
const user2 = new User("Sara");

console.log(user1);
console.log(user2);

/*
Expected Output

User { name: 'Ali' }
User { name: 'Sara' }
*/