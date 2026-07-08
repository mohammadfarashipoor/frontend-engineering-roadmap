/**
 * Use Case: API Response Validation
 *
 * Problem:
 * Backend responses don't always match
 * the expected data types.
 *
 * What You'll Learn:
 * - JavaScript data types
 * - Runtime type checking
 * - Why validating API responses matters
 */

// Simulated API response
const apiResponse = {
  id: 101,
  name: "Mechanical Keyboard",
  price: "129.99", // ❌ Should be a number
  inStock: true,
};

function validateProduct(product) {
  if (typeof product.price !== "number") {
    throw new Error(
      `Invalid product price. Expected number, received ${typeof product.price}.`
    );
  }

  console.log("Product is valid.");
}

try {
  validateProduct(apiResponse);
} catch (error) {
  console.error(error.message);
}