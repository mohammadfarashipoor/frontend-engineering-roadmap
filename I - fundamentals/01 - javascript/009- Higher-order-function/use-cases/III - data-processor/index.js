/**
 * Use Case: Data Processor
 *
 * Problem:
 * Different datasets require different processing,
 * but the iteration logic should remain reusable.
 *
 * What You'll Learn:
 * - Injecting behavior
 * - Reusable algorithms
 * - Foundation of Array methods
 */

function processData(items, transform) {
  const result = [];

  for (const item of items) {
    result.push(transform(item));
  }

  return result;
}

const users = [
  {
    id: 1,
    name: "John"
  },
  {
    id: 2,
    name: "Alice"
  }
];

const names = processData(users, function (user) {
  return user.name;
});

console.log(names);