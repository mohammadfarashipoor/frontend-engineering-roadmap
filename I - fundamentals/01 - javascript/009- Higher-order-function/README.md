
# Higher-Order Functions

> How can functions make behavior reusable and flexible?

---

## 📖 What Are Higher-Order Functions?

A higher-order function is a function that works with other functions.

It can receive functions as arguments, return functions as results, or both.

Instead of hardcoding behavior, higher-order functions make it possible to customize and reuse logic by delegating part of the work to other functions.

This flexibility is one of JavaScript's most powerful programming features.

---

## ⚙️ How Do They Work?

A higher-order function delegates part of its behavior to another function.

```text
Higher-Order Function

↓

Receive Function

↓

Execute Behavior

↓

Return Result (Optional)
```

By separating reusable logic from customizable behavior, higher-order functions make code easier to extend and maintain.

---

## 🌍 Use Cases

The following examples demonstrate practical situations where higher-order functions make application logic more flexible.

| Use Case | Description |
|----------|-------------|
| `use-cases/retry-request` | Reuse retry logic while allowing different operations to be executed. |
| `use-cases/access-control` | Wrap existing behavior with permission checks before execution. |
| `use-cases/data-processor` | Process different kinds of data by injecting custom behavior. |

---

## ⚠️ Common Mistakes

### Confusing Higher-Order Functions with Callbacks

A callback is a function passed to another function.

A higher-order function is the function that receives or returns functions.

---

### Hardcoding Behavior

When behavior changes but surrounding logic stays the same, consider extracting that behavior into a function parameter.

---

### Creating Unnecessarily Complex Abstractions

Higher-order functions should simplify code, not hide simple logic behind excessive abstraction.

---

### Ignoring Readability

Passing functions around is powerful, but descriptive names and clear structure remain essential.

---

## 💬 Interview Questions

- What is a higher-order function?
- Why are higher-order functions useful?
- What is the difference between a higher-order function and a callback?
- Can a higher-order function return another function?
- Where are higher-order functions commonly used in JavaScript?

