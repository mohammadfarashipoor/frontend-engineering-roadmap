/**
 * Use Case: Function Arguments
 *
 * Problem:
 * Why do primitives and objects behave differently
 * when passed to a function?
 *
 * What You'll Learn:
 * Primitive values are copied,
 * while object references still point to
 * the same underlying object.
 */

function updateAge(age) {
  age = 30;
}

function updateUser(user) {
  user.role = "Admin";
}

let age = 25;

const user = {
  name: "Ali",
  role: "User",
};

updateAge(age);
updateUser(user);

console.log(age);
console.log(user);

/*
Expected Output

25
{ name: 'Ali', role: 'Admin' }
*/