
# ز

> A closure is a function that remembers variables from its lexical scope, even after the outer function has finished executing.

---

## 📖 What Is a Closure?

A closure is created when a function is defined inside another function and continues to access variables from the outer function's lexical scope after that outer function has already returned.

Rather than copying values, JavaScript keeps a reference to the lexical environment where the function was created. As long as the inner function exists, that environment remains accessible.

Closures are not a special feature that developers manually create—they are a natural consequence of JavaScript's lexical scoping.

---
## 🤔 Why Does Closure Exist?

Imagine you want a function to remember a value between multiple executions without exposing that value as a global variable.

Closures make this possible by preserving access to the function's lexical environment.
## ⚙️ How Does It Work?

When JavaScript creates a function, it also stores a reference to the surrounding lexical environment.

```text
Global Scope
      │
      ▼
Outer Function
      │
      ▼
Lexical Environment
      │
      ▼
Inner Function
      │
      ▼
Closure
```

Even if the outer function finishes execution, the lexical environment is preserved while the returned function still references it.

This allows the inner function to "remember" variables that would otherwise no longer be accessible.

---

## 🌍 Real-World Use Cases

The following use cases demonstrate how closures solve real-world problems rather than simply showcasing the language feature.

| Use Cases | Description |
|----------|-------------|
| [`use-cases/private-state`](./use-cases/private-state) | Keep sensitive data private while exposing only the required operations. |
| [`use-cases/debounce-search`](./use-cases/debounce-search) | Prevent unnecessary function executions while the user is typing. |
| [`use-cases/request-cache`](./use-cases/request-cache) | Cache API responses to avoid duplicate requests and improve performance. |
| [`use-cases/shopping-cart`](./use-cases/shopping-cart) | Create independent shopping cart instances with isolated internal state. |
---

## ✅ Advantages

- Encapsulates private state.
- Reduces reliance on global variables.
- Enables function factories.
- Makes utilities such as debounce, throttle, and memoization possible.
- Encourages reusable and composable code.

---

## ⚠️ Common Mistakes

### Confusing Scope with Closure

Scope determines **where** variables are accessible.

Closure determines **what a function remembers** after its outer function has finished.

---

### Using `var` Inside Loops

Because `var` is function-scoped, every closure may reference the same variable unexpectedly.

Prefer `let` when creating closures inside loops.

---

### Keeping Unnecessary References

Closures keep referenced variables alive.

Holding large objects inside long-lived closures can increase memory usage.

---

## 💬 Interview Questions

- What is a closure?
- How is a closure related to lexical scope?
- Why can a closure access variables after the outer function has returned?
- Can closures cause memory leaks?
- What are some practical use cases for closures?
- How are closures used in React Hooks?




