# Scope

> Where can a variable be accessed in a JavaScript program?

---

## 📖 What Is Scope?

Scope defines the region of a program where a variable can be accessed.

It determines the visibility and lifetime of variables, helping JavaScript organize data and prevent unintended access.

Understanding scope is essential for writing predictable, maintainable, and bug-free applications.

---

## ⚙️ How Does It Work?

When JavaScript executes code, every variable belongs to a specific scope.

When a variable is referenced, JavaScript searches for it by moving outward through the available scopes until it finds a matching declaration.

```text
Global Scope
      │
      ▼
Function Scope
      │
      ▼
Block Scope
```

If the variable cannot be found, JavaScript throws a `ReferenceError`.

---

## 🌍 Use Cases

The following examples demonstrate practical situations where understanding scope helps prevent common programming mistakes.

| Use Case | Description |
|----------|-------------|
| `use-cases/modal-manager` | Encapsulate modal state and expose only controlled operations. |
| `use-cases/api-client` | Restrict access to authentication data by keeping internal state private. |
| `use-cases/feature-flags` | Manage application feature flags without exposing internal configuration. |

---

## ⚠️ Common Mistakes

### Assuming Block Variables Are Accessible Everywhere

Variables declared with `let` and `const` only exist inside the block where they are defined.

---

### Accidentally Creating Global Variables

Assigning a value without declaring a variable can create unintended global state in non-strict mode.

---

### Shadowing Variables Unintentionally

Declaring a variable with the same name in an inner scope hides the outer variable.

---

### Accessing Variables Outside Their Scope

Attempting to use a variable where it is not visible results in a `ReferenceError`.

---

## 💬 Interview Questions

- What is scope in JavaScript?
- What is the difference between global, function, and block scope?
- What is variable shadowing?
- Why are `let` and `const` block scoped?
- How does scope make closures possible?

