/**
 * Use Case: Method Borrowing
 *
 * Problem:
 * A method defined on one object needs to be reused
 * by another object without duplicating the logic.
 *
 * What You'll Learn:
 * - Explicit Binding
 * - call() and apply()
 */

const userLogger = {
  prefix: "[User]",
  log(message) {
    console.log(`${this.prefix} ${message}`);
  },
};

const orderLogger = {
  prefix: "[Order]",
};

userLogger.log.call(orderLogger, "Order created");

userLogger.log.apply(orderLogger, ["Order shipped"]);

/*
Expected Output

[Order] Order created
[Order] Order shipped
*/