/**
 * Use Case: Dashboard Initialization
 *
 * Problem:
 * Before the application starts, JavaScript prepares
 * everything needed to execute the code.
 *
 * What You'll Learn:
 * - Global Execution Context
 * - Creation Phase
 * - Execution Phase
 */

console.log("Application started");

initializeDashboard();

function initializeDashboard() {
  console.log("Loading user...");
  console.log("Loading settings...");
  console.log("Rendering dashboard...");
}

console.log("Application ready");