# `this` Keyword

> How does JavaScript decide what `this` refers to inside a function?

---

## 📖 What Is `this`?

`this` is a special keyword that refers to the object a function is executing on.

Unlike variables, the value of `this` is not determined by where a function is defined.

It is determined by **how** the function is called.

---

## ⚙️ How Does It Work?

Every time a function is invoked, JavaScript looks at the call itself to decide what `this` should be.

```text
Function Invocation
        │
        ▼
   How Was It Called?
        │
   ┌────┼─────────────┬───────────────┐
   │    │              │               │
 Plain  Method       Explicit         new
 Call   Call     (call/apply/bind)   Keyword
   │    │              │               │
   ▼    ▼              ▼               ▼
undefined  Owning    Explicitly     Newly Created
(strict)   Object    Provided        Object
 / global   Value
```

Because the same function can be called in different ways, `this` can change every time it is invoked.

---

## 🌍 Use Cases

The following examples demonstrate practical situations where understanding `this` prevents unexpected bugs.

| Use Case | Description |
|----------|-------------|
| `use-cases/method-borrowing` | Reuse a method from one object on another using `call()` and `apply()`. |
| `use-cases/lost-context` | Understand why a method passed as a callback loses its `this`, and how `bind()` fixes it. |
| `use-cases/constructor-binding` | See how `this` refers to a newly created object when a function is called with `new`. |

---

## ⚠️ Common Mistakes

### Assuming `this` Refers to Where the Function Is Defined

`this` is determined by how a function is called, not by its surrounding code.

---

### Losing `this` When Passing a Method as a Callback

Extracting a method from its object and passing it separately disconnects it from that object.

```javascript
const render = widget.render;
render(); // `this` is no longer `widget`
```

---

### Forgetting That `this` Is `undefined` in Strict Mode

In strict mode (including inside classes and modules), calling a function without an owning object leaves `this` as `undefined` instead of the global object.

---

### Confusing Regular Functions and Arrow Functions Regarding `this`

Regular functions determine `this` at call time.

Arrow functions inherit `this` from the surrounding scope and ignore how they are called.

---

## 💬 Interview Questions

- What determines the value of `this` in a function?
- What is the difference between implicit and explicit binding?
- What do `call()`, `apply()`, and `bind()` do?
- What is the value of `this` inside a regular function called without an owning object?
- How does the `new` keyword affect the value of `this`?