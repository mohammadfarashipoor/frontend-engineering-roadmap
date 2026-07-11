/**
 * Use Case: Nested Function Calls
 *
 * Problem:
 * Every function call needs its own execution environment.
 *
 * What You'll Learn:
 * - Function Execution Context
 * - Independent execution
 */

function login() {
  console.log("Login");

  fetchProfile();
}

function fetchProfile() {
  console.log("Fetching profile");

  renderDashboard();
}

function renderDashboard() {
  console.log("Dashboard rendered");
}

login();