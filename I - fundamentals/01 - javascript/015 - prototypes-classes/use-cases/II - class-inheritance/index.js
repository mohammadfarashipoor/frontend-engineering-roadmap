/**
 * Use Case: Class Inheritance
 *
 * Problem:
 * Different account types share common behavior
 * but also need their own specialized behavior.
 *
 * What You'll Learn:
 * - extends
 * - super
 * - Method overriding
 */

class Account {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  describe() {
    console.log(`${this.owner}'s balance: $${this.balance}`);
  }
}

class SavingsAccount extends Account {
  constructor(owner, balance, interestRate) {
    super(owner, balance);
    this.interestRate = interestRate;
  }

  describe() {
    super.describe();
    console.log(`Interest rate: ${this.interestRate}%`);
  }
}

const account = new SavingsAccount("Ali", 1000, 5);

account.describe();

/*
Expected Output

Ali's balance: $1000
Interest rate: 5%
*/