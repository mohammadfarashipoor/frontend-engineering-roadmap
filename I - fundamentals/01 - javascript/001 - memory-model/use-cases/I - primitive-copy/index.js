/**
 * Use Case: Primitive Copy
 *
 * Problem:
 * Why doesn't changing one primitive variable affect another?
 *
 * What You'll Learn:
 * Primitive values are copied during assignment.
 * Each variable stores its own independent value.
 */

let originalAge = 25;

let copiedAge = originalAge;

copiedAge = 30;

console.log("Original:", originalAge);
console.log("Copied:", copiedAge);

/*
Expected Output

Original: 25
Copied: 30
*/