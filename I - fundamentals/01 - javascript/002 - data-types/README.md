
# Data Types

> What kinds of values exist in JavaScript, and why does knowing their type matter?

---

## 📖 What Are Data Types?

Every value in JavaScript has a data type.

A data type defines what a value represents and determines how JavaScript interprets, compares, and operates on it.

Understanding data types is fundamental because many language features and runtime behaviors depend on them.

---

## ⚙️ How Does It Work?

JavaScript classifies values into two categories:

```text
JavaScript Values
        │
        ├── Primitive
        │     ├── String
        │     ├── Number
        │     ├── Boolean
        │     ├── Undefined
        │     ├── Null
        │     ├── Symbol
        │     └── BigInt
        │
        └── Object
              ├── Object
              ├── Array
              ├── Function
              ├── Date
              ├── Map
              ├── Set
              └── ...
```

Although JavaScript provides many built-in objects, there is only one object data type.

---

## 🌍 Use Cases

The following examples demonstrate common scenarios where understanding data types is essential.

| Use Case | Description |
|----------|-------------|
| `use-cases/typeof` | Inspect the type of a value at runtime. |
| `use-cases/null-vs-undefined` | Understand the difference between missing and intentionally empty values. |
| `use-cases/number-vs-bigint` | Work safely with numbers larger than JavaScript's safe integer limit. |

---

## ⚠️ Common Mistakes

### Assuming Arrays Have Their Own Data Type

Arrays are objects.

```javascript
typeof []
// "object"
```

---

### Expecting `typeof null` to Return `"null"`

```javascript
typeof null
// "object"
```

This is a well-known historical behavior in JavaScript.

---

### Confusing `null` and `undefined`

Although both represent the absence of a value, they have different meanings and are used in different situations.

---

### Ignoring `BigInt`

The `Number` type cannot safely represent every integer.

Large integers require `BigInt`.

---

## 💬 Interview Questions

- What are the primitive data types in JavaScript?
- What is the difference between primitive values and objects?
- Why does `typeof null` return `"object"`?
- Why is `typeof []` equal to `"object"`?
- When should `BigInt` be used?

