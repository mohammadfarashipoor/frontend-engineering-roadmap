/**
 * Use Case: Tree Search
 *
 * Problem:
 * Find a category inside a nested tree structure.
 *
 * What You'll Learn:
 * - Recursive search
 * - Early return
 */

const categories = {
  name: "Electronics",
  children: [
    {
      name: "Laptop",
      children: [
        {
          name: "Gaming",
          children: []
        },
        {
          name: "Business",
          children: []
        }
      ]
    },
    {
      name: "Phone",
      children: []
    }
  ]
};

function findCategory(node, target) {
  if (node.name === target) {
    return node;
  }

  for (const child of node.children) {
    const result = findCategory(child, target);

    if (result) {
      return result;
    }
  }

  return null;
}

const category = findCategory(categories, "Gaming");

console.log(category);