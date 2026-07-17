/**
 * Use Case: Button Listener
 *
 * Problem:
 * Code should execute only after
 * the user clicks a button.
 *
 * What You'll Learn:
 * - Event callbacks
 * - Deferred execution
 */

const button = document.getElementById("save-btn");

button.addEventListener("click", function () {
  console.log("Saving changes...");
});