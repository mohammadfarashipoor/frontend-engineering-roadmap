
# Type Coercion

> Why does JavaScript sometimes convert values automatically before performing an operation?

---

## 📖 What Is Type Coercion?

Type coercion is the process of converting a value from one data type to another.

JavaScript performs this conversion either automatically (implicit coercion) or manually (explicit coercion), depending on how values are used.

Understanding type coercion is essential because unexpected conversions can lead to subtle bugs and incorrect application behavior.

---

## ⚙️ How Does It Work?

Whenever an operation involves values of different data types, JavaScript determines whether a conversion is required.

```text
Operation
     │
     ▼
Different Data Types?
     │
 ┌───┴────┐
 │        │
Yes      No
 │        │
 ▼        ▼
Convert   Execute
 │
 ▼
Return Result
```

There are two forms of type coercion:

- **Implicit Coercion** — JavaScript performs the conversion automatically.
- **Explicit Coercion** — The developer intentionally converts the value using functions such as `Number()`, `String()`, or `Boolean()`.

---

## 🌍 Use Cases

The following examples demonstrate practical situations where understanding type coercion prevents real-world bugs.

| Use Case | Description |
|----------|-------------|
| `use-cases/order-summary` | Convert product prices before calculating the total cost. |
| `use-cases/login-form-validation` | Convert user input into the expected data type before validation. |
| `use-cases/query-parameter-parser` | Parse URL query parameters into numbers and booleans before using them. |

---

## ⚠️ Common Mistakes

### Assuming User Input Is Already a Number

Values received from form inputs are always strings.

Using them directly in calculations may produce unexpected results.

---

### Relying on Implicit Coercion

Although JavaScript automatically converts values, explicit conversions are usually easier to read and maintain.

---

### Using Loose Equality (`==`) Without Understanding Coercion

Loose equality performs implicit type coercion before comparison.

This can produce results that are difficult to predict.

---

### Forgetting That URL Parameters Are Strings

Query parameters are always received as strings and often require explicit conversion before use.

---

## 💬 Interview Questions

- What is type coercion?
- What is the difference between implicit and explicit coercion?
- Why is `==` generally discouraged compared to `===`?
- When should explicit type conversion be preferred?
- Can implicit type coercion cause production bugs?

