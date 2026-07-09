/**
 * Use Case: Order Summary
 *
 * Problem:
 * Product prices received from an API are strings.
 * Using them directly results in string concatenation
 * instead of numeric addition.
 *
 * What You'll Learn:
 * - Implicit vs explicit type coercion
 * - Why API data should be normalized
 */

const products = [
  { name: "Keyboard", price: "120" },
  { name: "Mouse", price: "80" },
  { name: "Monitor", price: "300" },
];

const incorrectTotal =
  products[0].price +
  products[1].price +
  products[2].price;

console.log("Incorrect Total:", incorrectTotal);

const correctTotal = products.reduce((total, product) => {
  return total + Number(product.price);
}, 0);

console.log("Correct Total:", correctTotal);