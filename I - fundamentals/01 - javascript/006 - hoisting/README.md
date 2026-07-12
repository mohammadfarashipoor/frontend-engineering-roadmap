
# Hoisting

> Why can some declarations be accessed before their position in the source code?

---

## 📖 What Is Hoisting?

Hoisting is JavaScript's behavior of making certain declarations available during the creation phase of an execution context, before the code begins executing.

This explains why some variables and functions can be referenced before they appear in the source code.

Understanding hoisting helps explain many behaviors that seem surprising at first, especially when working with variables and function declarations.

---

## ⚙️ How Does It Work?

Before executing your code, JavaScript creates an execution context.

During the creation phase, declarations are processed and prepared according to their type.

```text
Source Code

↓

Create Execution Context

↓

Process Declarations

↓

Execute Code
```

Not every declaration is treated the same.

Function declarations, `var`, `let`, and `const` each have different initialization behavior.

---

## 🌍 Use Cases

The following examples demonstrate practical situations where understanding hoisting explains JavaScript's runtime behavior.

| Use Case | Description |
|----------|-------------|
| `use-cases/dashboard-bootstrap` | Understand why a function can be called before its declaration during application startup. |
| `use-cases/script-initialization` | See how different variable declarations behave before initialization. |
| `use-cases/config-loader` | Prevent bugs caused by accessing variables before they are initialized. |

---

## ⚠️ Common Mistakes

### Assuming All Declarations Behave the Same

Function declarations, `var`, `let`, and `const` are processed differently during the creation phase.

---

### Accessing Variables Before Initialization

Variables declared with `let` and `const` cannot be accessed before initialization.

---

### Confusing Hoisting with Value Assignment

Hoisting prepares declarations, but values are assigned only when the corresponding line of code executes.

---

### Thinking Hoisting Moves Code

JavaScript does not physically move code.

Hoisting is an internal behavior of the JavaScript engine during the creation phase of an execution context.

---

## 💬 Interview Questions

- What is hoisting?
- Is hoisting an actual movement of code?
- How do `var`, `let`, and `const` differ during hoisting?
- Why can function declarations be called before their declaration?
- What is the relationship between hoisting and execution context?

