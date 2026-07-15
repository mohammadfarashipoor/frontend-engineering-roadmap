/**
 * Use Case: Timer Logger
 *
 * Problem:
 * A delayed task needs access to the current object.
 *
 * What You'll Learn:
 * - Context loss inside asynchronous callbacks
 * - Lexical `this`
 */

class SessionTimer {
  constructor() {
    this.username = "Ali";
  }

  start() {

    console.log("----- Regular Function -----");

    setTimeout(function () {
      console.log(this.username);
    }, 1000);

    console.log("----- Arrow Function -----");

    setTimeout(() => {
      console.log(this.username);
    }, 2000);

  }
}

const session = new SessionTimer();

session.start();