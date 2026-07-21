# Synchronous vs Asynchronous JavaScript

> Why can't JavaScript wait for slow operations?

---

## 📖 What Is Synchronous and Asynchronous Execution?

JavaScript executes code one task at a time.

When a task finishes before the next one begins, execution is **synchronous**.

However, some operations—such as network requests, file access, or user interactions—may take an unpredictable amount of time.

If JavaScript waited for every slow operation to finish before continuing, applications would become unresponsive.

Instead, JavaScript allows certain operations to complete independently while the main program continues executing.

This execution model is known as **asynchronous programming**.

---

## ⚙️ How Do They Differ?

The difference lies in **when the program continues execution**.

### Synchronous Execution

Each task must finish before the next one begins.

```text
Task A

↓

Task B

↓

Task C
```

The program waits for every operation to complete.

---

### Asynchronous Execution

Some operations begin now but finish later.

Meanwhile, the rest of the program continues executing.

```text
Start Slow Task

↓

Continue Other Work

↓

Slow Task Completes

↓

Handle Result
```

The application remains responsive while waiting for long-running operations.

---

## 🌍 Use Cases

The following examples demonstrate situations where asynchronous execution prevents applications from becoming blocked.

| Use Case                         | Description                                                                |
| -------------------------------- | -------------------------------------------------------------------------- |
| `use-cases/blocking-task`        | Compare a blocking operation with a responsive application flow.           |
| `use-cases/background-operation` | Start a slow operation while allowing the rest of the program to continue. |

---

## ⚠️ Common Mistakes

### Assuming JavaScript Executes Multiple Tasks Simultaneously

JavaScript executes one piece of JavaScript code at a time.

Asynchronous programming allows waiting for external operations without blocking the execution flow.

---

### Confusing Asynchronous Programming with Parallel Execution

Asynchronous execution does not necessarily mean multiple JavaScript functions run simultaneously.

It means the program does not stop while waiting for long-running operations.

---

### Expecting Immediate Results from Slow Operations

Operations such as network requests or user interactions complete later.

Code that depends on their results must also execute later.

---

### Treating Every Operation as Asynchronous

Most JavaScript code executes synchronously.

Only specific operations are designed to complete asynchronously.

---

## 💬 Interview Questions

* What is synchronous execution?
* What is asynchronous execution?
* Why does JavaScript need asynchronous programming?
* What problems does asynchronous programming solve?
* What is the difference between asynchronous execution and parallel execution?
