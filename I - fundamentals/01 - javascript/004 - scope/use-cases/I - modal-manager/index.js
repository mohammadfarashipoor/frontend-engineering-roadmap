/**
 * Use Case: Modal Manager
 *
 * Problem:
 * Multiple parts of the application should be able
 * to open or close a modal without directly modifying
 * its internal state.
 *
 * What You'll Learn:
 * - Function Scope
 * - Private variables
 * - Controlled access
 */

function createModalManager() {
  let isOpen = false;

  return {
    open() {
      isOpen = true;
      console.log("Modal opened");
    },

    close() {
      isOpen = false;
      console.log("Modal closed");
    },

    status() {
      console.log(`Modal is ${isOpen ? "open" : "closed"}`);
    },
  };
}

const modal = createModalManager();

modal.status();

modal.open();

modal.status();

modal.close();

modal.status();