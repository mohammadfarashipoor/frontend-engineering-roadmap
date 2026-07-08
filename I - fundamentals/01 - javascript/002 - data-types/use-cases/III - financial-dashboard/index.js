/**
 * Use Case: Financial Dashboard
 *
 * Problem:
 * JavaScript Numbers cannot safely represent
 * every integer.
 *
 * What You'll Learn:
 * - Number
 * - BigInt
 * - Safe integer limits
 */

const accountBalance = 9007199254740993;

console.log(accountBalance);

const safeBalance = 9007199254740993n;

console.log(safeBalance);