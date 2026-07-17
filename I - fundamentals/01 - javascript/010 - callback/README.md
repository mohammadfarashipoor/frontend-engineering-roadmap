
# Callbacks

> How can functions be executed later?

---

## 📖 What Are Callbacks?

A callback is a function that is passed to another function so it can be executed at a later time.

Instead of executing behavior immediately, callbacks allow programs to decide **when** that behavior should run.

This makes callbacks a fundamental building block of event-driven and asynchronous programming in JavaScript.

---

## ⚙️ How Do They Work?

A callback is defined first.

Instead of being executed immediately, it is passed to another function that decides when to execute it.

```text
Define Callback

↓

Pass Callback

↓

Wait

↓

Execute Callback
```

The function that receives the callback controls the timing of its execution.

---

## 🌍 Use Cases

The following examples demonstrate practical situations where callbacks allow behavior to execute later instead of immediately.

| Use Case | Description |
|----------|-------------|
| `use-cases/task-runner` | Execute different tasks after a shared workflow completes. |
| `use-cases/button-listener` | Respond to user interaction when a button is clicked. |
| `use-cases/file-downloader` | Execute custom logic after a simulated download finishes. |

---

## ⚠️ Common Mistakes

### Executing Instead of Passing a Callback

Passing a function and calling a function are different operations.

---

### Assuming Callbacks Execute Immediately

Callbacks execute only when the receiving function decides to invoke them.

---

### Creating Deeply Nested Callbacks

Excessive callback nesting makes code difficult to read and maintain.

Modern JavaScript often uses Promises and `async/await` to improve readability.

---

### Confusing Callbacks with Higher-Order Functions

A callback is the function being passed.

A higher-order function is the function that receives or returns functions.

---

## 💬 Interview Questions

- What is a callback?
- Why are callbacks useful?
- What is the difference between a callback and a higher-order function?
- Why are callbacks common in asynchronous programming?
- What problems can excessive callback nesting cause?


