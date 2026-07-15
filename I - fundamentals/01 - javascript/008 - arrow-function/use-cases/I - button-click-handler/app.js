/**
 * Use Case: Button Click Handler
 *
 * Problem:
 * A button click handler needs access to the object
 * that registered the event.
 *
 * What You'll Learn:
 * - Why regular functions lose `this`
 * - How arrow functions preserve the surrounding `this`
 */

class LoginPage {
  constructor() {
    this.title = "Login Page";

    this.button = document.getElementById("login-btn");
  }

  initialize() {

    console.log("----- Regular Function -----");

    this.button.addEventListener("click", function () {
      console.log(this.title);
    });

    console.log("----- Arrow Function -----");

    this.button.addEventListener("click", () => {
      console.log(this.title);
    });

  }
}

const page = new LoginPage();

page.initialize();