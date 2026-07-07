
# Memory Model

> Why does assigning or passing a value sometimes create an independent copy, while other times multiple variables seem to share the same data?

---

## 📖 What Is the Memory Model?

The JavaScript memory model describes how values are stored, assigned, and accessed in memory.

Understanding this model explains why primitives and objects behave differently during assignment, function calls, and copying operations.

Instead of memorizing JavaScript behaviors, learning the memory model helps you reason about them.

---

## ⚙️ How Does It Work?

Every value in JavaScript is represented in memory.

When assigning one variable to another, JavaScript either:

- copies the value, or
- shares a reference to the same value.

Which behavior occurs depends on the type of value being assigned.

```text
Assignment
      │
      ▼
Is the value a Primitive?
      │
 ┌────┴────┐
 │         │
Yes       No
 │         │
 ▼         ▼
Copy      Share Reference
```

Understanding this distinction is the foundation for predicting how variables behave in real applications.

---

## 🌍 Use Cases

The following examples demonstrate common situations where understanding the memory model prevents unexpected behavior.

| Use Case | Description |
|----------|-------------|
| `use-cases/primitive-copy` | Learn why changing one primitive variable does not affect another. |
| `use-cases/shared-reference` | Understand why multiple object variables can reference the same data. |
| `use-cases/function-arguments` | Explore how primitives and objects behave differently when passed to functions. |
| `use-cases/array-copy` | See why assigning an array does not create an independent copy. |

---

## ⚠️ Common Mistakes

### Assuming Assignment Always Creates a Copy

Objects and arrays are not automatically duplicated during assignment.

Multiple variables may reference the same underlying value.

---

### Expecting Function Arguments to Behave the Same

Passing a primitive value and passing an object can produce different results because of how each value is represented in memory.

---

### Accidentally Mutating Shared Data

Modifying an object or array through one reference also affects every other reference pointing to the same value.

---

### Confusing Copying with Cloning

Assigning an object or array creates another reference.

Creating an independent copy requires an explicit cloning strategy.

---

## 💬 Interview Questions

- What is the JavaScript memory model?
- What is the difference between copying a primitive and assigning an object?
- Why do two variables sometimes reflect the same object changes?
- How are function arguments handled in JavaScript?
- Why doesn't assigning an array create a new array?

