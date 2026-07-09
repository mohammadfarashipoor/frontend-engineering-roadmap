/**
 * Use Case: Login Form Validation
 *
 * Problem:
 * Values collected from HTML inputs
 * are always strings.
 *
 * What You'll Learn:
 * - Why explicit conversion matters
 * - Boolean conversion
 */

const form = {
  rememberMe: "true",
};

console.log(typeof form.rememberMe);

const rememberMe = form.rememberMe === "true";

console.log(typeof rememberMe);
console.log(rememberMe);