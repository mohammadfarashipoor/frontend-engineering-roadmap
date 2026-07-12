/**
 * Use Case: Dashboard Bootstrap
 *
 * Problem:
 * The application starts by calling an initialization
 * function before its declaration.
 *
 * What You'll Learn:
 * - Function Declaration Hoisting
 * - Creation Phase
 * - Why this code works
 */

console.log("Starting application...");

initializeDashboard();

function initializeDashboard() {
  console.log("Loading user...");
  console.log("Loading settings...");
  console.log("Rendering dashboard...");
}

console.log("Application ready.");