/**
 * Use Case: Feature Toggle
 *
 * Problem:
 * Different application environments require
 * different logging behavior.
 *
 * What You'll Learn:
 * - Function Expression
 * - Functions as values
 */

const isDevelopment = true;

const logger = isDevelopment
  ? function (message) {
      console.log(`[DEV] ${message}`);
    }
  : function () {};

logger("Application started.");