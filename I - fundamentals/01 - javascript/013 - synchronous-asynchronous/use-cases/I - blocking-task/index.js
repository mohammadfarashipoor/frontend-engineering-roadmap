/**
 * Use Case: Blocking Task
 *
 * Problem:
 * A slow synchronous task blocks
 * everything that comes after it.
 *
 * What You'll Learn:
 * - Synchronous execution
 * - Blocking behavior
 */

function heavyComputation() {
  console.log("Starting heavy computation...");

  const start = Date.now();

  while (Date.now() - start < 3000) {
    // Simulate heavy synchronous work
  }

  console.log("Heavy computation finished.");
}

console.log("Application started.");

heavyComputation();

console.log("User can interact now.");