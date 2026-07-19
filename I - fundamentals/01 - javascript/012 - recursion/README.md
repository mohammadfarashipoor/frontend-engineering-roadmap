
# Recursion

> How can a function solve a problem by breaking it into smaller versions of itself?

---

## 📖 What Is Recursion?

Recursion is a technique where a function solves a problem by calling itself with a smaller or simpler input.

Instead of repeating the same logic with loops, a recursive function repeatedly reduces the problem until it reaches a condition where no further work is needed.

Every recursive solution consists of two essential parts:

- **Base Case** — the condition that stops the recursion.
- **Recursive Case** — the step that reduces the problem and calls the function again.

Without a base case, recursion never stops.

---

## ⚙️ How Does It Work?

Each recursive call creates a new function execution with its own local variables.

The function continues calling itself until the base case is reached.

Then each waiting function finishes one by one until the original call completes.

```text
Initial Problem

↓

Smaller Problem

↓

Smaller Problem

↓

Base Case

↓

Return Result

↓

Return Result

↓

Final Result
```

Recursion is another way of expressing repetition. Some problems become much simpler when described recursively instead of iteratively.

---

## 🌍 Use Cases

The following examples demonstrate situations where recursion produces cleaner and more natural solutions than traditional loops.

| Use Case | Description |
|----------|-------------|
| `use-cases/folder-size` | Calculate the total size of nested folders and files. |
| `use-cases/nested-comments` | Render comments with unlimited reply levels. |
| `use-cases/tree-search` | Search for a value inside a tree structure. |

---

## ⚠️ Common Mistakes

### Forgetting the Base Case

Without a stopping condition, recursion continues until the call stack overflows.

---

### Not Making Progress Toward the Base Case

Each recursive call should move closer to the base case.

If the input never becomes simpler, recursion never finishes.

---

### Using Recursion for Every Problem

Many problems are easier to solve with loops.

Recursion is most useful when the problem naturally contains smaller versions of itself.

---

### Ignoring Readability

A recursive solution should make the algorithm easier to understand.

If recursion makes the code harder to follow than an iterative solution, a loop may be the better choice.

---

## 💬 Interview Questions

- What is recursion?
- What is the difference between a base case and a recursive case?
- Why is a base case necessary?
- When is recursion preferable to iteration?
- What happens if recursion never reaches its base case?

