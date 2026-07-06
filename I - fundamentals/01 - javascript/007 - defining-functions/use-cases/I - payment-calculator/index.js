/**
 * Use Case: Payment Calculator
 *
 * Problem:
 * A checkout process needs reusable business logic
 * to calculate the final payment amount.
 *
 * What You'll Learn:
 * - Function Declaration
 * - Reusable behavior
 */

const subtotal = 120;
const shipping = 15;
const discount = 20;

const total = calculateTotal(subtotal, shipping, discount);

console.log(`Total: $${total}`);

function calculateTotal(subtotal, shipping, discount) {
  return subtotal + shipping - discount;
}