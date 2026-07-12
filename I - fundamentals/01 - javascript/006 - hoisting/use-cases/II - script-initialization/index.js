/**
 * Use Case: Script Initialization
 *
 * Problem:
 * Different declaration types behave differently
 * before initialization.
 *
 * What You'll Learn:
 * - Function Declaration
 * - var
 * - let
 * - const
 */

// Function Declaration
initialize();

function initialize() {
  console.log("Function declaration is ready.");
}

// var
console.log(apiUrl); // undefined

var apiUrl = "https://api.example.com";

// let
try {
  console.log(token);
} catch (error) {
  console.log(error.name);
}

let token = "abc123";

// const
try {
  console.log(version);
} catch (error) {
  console.log(error.name);
}

const version = "1.0.0";