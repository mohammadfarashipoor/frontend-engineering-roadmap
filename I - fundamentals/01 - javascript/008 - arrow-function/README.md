
# Arrow Functions

> Why were arrow functions introduced in JavaScript?

---

## 📖 What Are Arrow Functions?

Arrow functions are an alternative way to define functions in JavaScript.

They were introduced to simplify function syntax and provide a predictable `this` behavior.

Although they can often replace regular functions, they are **not** identical.

Understanding their differences is more important than learning their shorter syntax.

---

## ⚙️ How Do They Work?

Arrow functions define behavior just like regular functions.

However, they inherit `this` from the surrounding scope instead of creating their own.

```text
Define Arrow Function

↓

Inherit `this`

↓

Invoke Function

↓

Execute Behavior
```

Because of this behavior, arrow functions are especially useful when a callback needs to access the surrounding context.

---

## 🌍 Use Cases

The following examples demonstrate situations where arrow functions provide clearer and more predictable behavior.

| Use Case | Description |
|----------|-------------|
| `use-cases/button-click-handler` | Preserve the surrounding `this` inside an event callback. |
| `use-cases/timer-logger` | Avoid losing context inside asynchronous callbacks. |

---

## ⚠️ Common Mistakes

### Assuming Arrow Functions Are Just Shorter Syntax

Their most important difference is how they handle `this`.

---

### Using Arrow Functions Everywhere

Regular functions are still the better choice in some situations.

---

### Expecting Arrow Functions to Have Their Own `this`

Arrow functions inherit `this` from the surrounding scope.

---

### Using Arrow Functions as Constructors

Arrow functions cannot be used with `new`.

---

## 💬 Interview Questions

- Why were arrow functions introduced?
- How does `this` behave inside an arrow function?
- What is the difference between an arrow function and a regular function?
- Can an arrow function be used as a constructor?
- When should you avoid using an arrow function?

