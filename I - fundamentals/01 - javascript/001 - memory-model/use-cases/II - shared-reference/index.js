/**
 * Use Case: Shared Reference
 *
 * Problem:
 * Why does modifying one object also affect another variable?
 *
 * What You'll Learn:
 * Object assignment copies the reference,
 * not the object itself.
 */

const originalUser = {
  name: "Ali",
  role: "User",
};

const sharedUser = originalUser;

sharedUser.role = "Admin";

console.log(originalUser);
console.log(sharedUser);

/*
Expected Output

{ name: 'Ali', role: 'Admin' }
{ name: 'Ali', role: 'Admin' }
*/