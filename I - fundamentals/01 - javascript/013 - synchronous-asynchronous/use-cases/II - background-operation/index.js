/**
 * Use Case: Background Operation
 *
 * Problem:
 * A slow operation should not stop
 * the rest of the application.
 *
 * Note:
 * setTimeout is only used here to
 * simulate a slow operation.
 *
 * What You'll Learn:
 * - Non-blocking execution
 * - Continuing other work
 */

console.log("Application started.");

console.log("Starting download...");

setTimeout(() => {
  console.log("Download completed.");
}, 3000);

console.log("User can continue using the application.");