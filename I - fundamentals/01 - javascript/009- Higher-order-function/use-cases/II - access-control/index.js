/**
 * Use Case: Access Control
 *
 * Problem:
 * Some actions should only execute
 * if the current user has permission.
 *
 * What You'll Learn:
 * - Returning functions
 * - Wrapping existing behavior
 * - Behavior composition
 */

function withPermission(action) {
  return function () {
    const isAdmin = true;

    if (!isAdmin) {
      console.log("Access denied.");
      return;
    }

    action();
  };
}

function deleteUser() {
  console.log("User deleted.");
}

const deleteUserWithPermission = withPermission(deleteUser);

deleteUserWithPermission();