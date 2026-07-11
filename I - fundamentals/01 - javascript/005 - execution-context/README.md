
# Execution Context

> What happens inside the JavaScript engine before your code starts running?

---

## 📖 What Is Execution Context?

Execution Context is the environment JavaScript creates whenever code begins to execute.

It prepares everything needed before running the code, including variables, functions, and the scope in which they exist.

Every piece of JavaScript code runs inside an execution context.

---

## ⚙️ How Does It Work?

Before executing your code, JavaScript creates an execution context.

During this process, it prepares the execution environment and then starts running the code line by line.

```text
Code

↓

Create Execution Context

↓

Prepare Variables & Functions

↓

Execute Code
```

A new execution context is created whenever a function is invoked.

```text
Global Context

↓

Function Context

↓

Function Context

↓

...
```

Each execution context is independent and manages its own execution environment.

---

## 🌍 Use Cases

The following examples demonstrate practical situations where understanding execution contexts explains JavaScript's runtime behavior.

| Use Case | Description |
|----------|-------------|
| `use-cases/dashboard-initialization` | Understand why functions can be called before they appear in the source code. |
| `use-cases/nested-function-calls` | Visualize how JavaScript creates a new execution context for every function call. |
| `use-cases/execution-flow` | Follow the execution flow across multiple function calls in a real application. |

---

## ⚠️ Common Mistakes

### Thinking JavaScript Executes Everything Immediately

Before running the first line of code, JavaScript prepares the execution environment.

---

### Assuming All Variables Already Contain Their Final Values

Variables are prepared before execution, but their values are assigned during execution.

---

### Believing Every Function Shares the Same Execution Context

Each function invocation creates its own execution context.

---

### Confusing Execution Context with Scope

Scope determines where variables can be accessed.

Execution Context determines how JavaScript prepares and executes code.

---

## 💬 Interview Questions

- What is an execution context?
- When is an execution context created?
- What is the difference between the global execution context and a function execution context?
- Does every function call create a new execution context?
- What is the relationship between execution context and hoisting?

