/**
 * Use Case: Array Copy
 *
 * Problem:
 * Why doesn't assigning an array create
 * a new independent array?
 *
 * What You'll Learn:
 * Arrays are objects.
 * Assignment copies the reference,
 * not the array itself.
 */

const originalProducts = [
  "Keyboard",
  "Mouse",
];

const sharedProducts = originalProducts;

sharedProducts.push("Monitor");

console.log(originalProducts);
console.log(sharedProducts);

/*
Expected Output

[ 'Keyboard', 'Mouse', 'Monitor' ]
[ 'Keyboard', 'Mouse', 'Monitor' ]
*/