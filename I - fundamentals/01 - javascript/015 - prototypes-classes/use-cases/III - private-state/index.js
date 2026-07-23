/**
 * Use Case: Private State
 *
 * Problem:
 * Some internal data should not be accessible
 * or modifiable from outside the class.
 *
 * What You'll Learn:
 * - Private class fields
 * - Encapsulation
 */

class BankAccount {
  #balance;

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("Sara", 500);

account.deposit(200);

console.log(account.getBalance());
console.log(account.owner);

// account.#balance would throw a SyntaxError,
// since private fields can only be accessed from inside the class.

/*
Expected Output

700
Sara
*/