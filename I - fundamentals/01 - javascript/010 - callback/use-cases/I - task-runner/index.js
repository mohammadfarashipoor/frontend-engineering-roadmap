/**
 * Use Case: Task Runner
 *
 * Problem:
 * Different actions should execute after
 * a shared task completes.
 *
 * What You'll Learn:
 * - Passing callbacks
 * - Deferred execution
 * - Reusable workflows
 */

function runTask(callback) {
  console.log("Starting task...");

  // Simulate work
  console.log("Processing...");

  console.log("Task completed.");

  callback();
}

function sendNotification() {
  console.log("Notification sent.");
}

runTask(sendNotification);