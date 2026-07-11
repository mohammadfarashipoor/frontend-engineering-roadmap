/**
 * Use Case: Execution Flow
 *
 * Problem:
 * A feature is completed by multiple functions working
 * together in sequence.
 *
 * What You'll Learn:
 * - Execution order
 * - Execution Context lifecycle
 */

function loadUser() {
  console.log("User loaded");
}

function loadOrders() {
  console.log("Orders loaded");
}

function renderPage() {
  console.log("Page rendered");
}

function showNotification() {
  console.log("Welcome back!");
}

function startApplication() {
  loadUser();
  loadOrders();
  renderPage();
  showNotification();
}

startApplication();