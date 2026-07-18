/**
 * Use Case: Private State
 *
 * Problem:
 * We need to store a user's balance, but it should not be
 * directly accessible or modifiable from outside.
 *
 * Why Closure?
 * The returned methods keep access to the private variable,
 * while preventing external code from modifying it directly.
 */

function createWallet(initialBalance = 0) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (amount <= 0) {
        console.log("Amount must be greater than zero.");
        return;
      }

      balance += amount;
      console.log(`Deposited: $${amount}`);
    },

    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient balance.");
        return;
      }

      balance -= amount;
      console.log(`Withdrawn: $${amount}`);
    },

    getBalance() {
      return balance;
    }
  };
}

const wallet = createWallet(100);

wallet.deposit(50);
wallet.withdraw(30);

console.log(wallet.getBalance()); // 120

console.log(wallet.balance); // undefined