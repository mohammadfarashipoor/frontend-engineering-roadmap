# Prototypes & Classes

> How does JavaScript share behavior between objects without copying it?

---

## 📖 What Are Prototypes & Classes?

Every object in JavaScript has an internal link to another object, called its prototype.

When a property or method is not found directly on an object, JavaScript looks for it on the prototype, and continues up the chain until it is found or the chain ends.

Classes are not a different inheritance model. They are syntactic sugar built on top of this same prototype mechanism, offering a clearer syntax for defining and extending behavior.

---

## ⚙️ How Does It Work?

```text
Access a Property
        │
        ▼
Does the Object Have It?
        │
   ┌────┴────┐
   │         │
  Yes        No
   │         │
   ▼         ▼
 Return   Look Up the Prototype
 Value          │
                ▼
        Repeat Until Found
        or Prototype is null
```

Because objects can be linked this way, behavior defined once can be reused by many objects without duplication.

---

## 🌍 Use Cases

The following examples demonstrate practical situations where understanding prototypes and classes explains how inheritance works in JavaScript.

| Use Case | Description |
|----------|-------------|
| `use-cases/prototype-chain` | See how property lookup travels through the prototype chain. |
| `use-cases/class-inheritance` | Share and extend behavior between classes using `extends` and `super`. |
| `use-cases/private-state` | Encapsulate internal data using private class fields. |

---

## ⚠️ Common Mistakes

### Assuming Classes Are a Different Inheritance Model

Classes still use prototypal inheritance underneath; they only change the syntax.

---

### Modifying Built-in Prototypes

Adding or changing properties on built-in prototypes, such as `Array.prototype`, can cause unpredictable conflicts across an application.

---

### Forgetting to Call `super()` in a Subclass Constructor

A derived class must call `super()` before it can use `this` inside its constructor.

---

### Confusing Prototype with `__proto__`

`prototype` is a property found on constructor functions and classes.

`__proto__` is the internal link found on instances, pointing back to that prototype.

---

## 💬 Interview Questions

- What is the prototype chain?
- How do classes relate to prototypes under the hood?
- What is the purpose of the `super` keyword?
- What happens if a derived class constructor doesn't call `super()`?
- What are private class fields, and how do they differ from regular properties?