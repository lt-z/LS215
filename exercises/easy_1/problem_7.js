/*
In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year or false if it is not a leap year.

Problem:
Input: Number
Output: Boolean

Definitions and Rules:
- Determine if year is a leap year.
- Leap year = Year is evenly divisible by 4 or 400.
- Not leap year = year is evenly divisible by 100.
- Input is a year greater than 0.

Examples:
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

Data structure:
Number

Algorithm:
- If year is divisible by 100 and divisible by 400:
  - true
- Else if year is divisible by 100
  - false
- return divisible by 4
*/

function isLeapYear(year) {
  if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  }
  return year % 4 === 0;
}

// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
// console.log(isLeapYear(2000));      // true
// console.log(isLeapYear(1900));      // false
// console.log(isLeapYear(1752));      // true
// console.log(isLeapYear(1700));      // false
// console.log(isLeapYear(1));         // false
// console.log(isLeapYear(100));       // false
// console.log(isLeapYear(400));       // true

function isLeapYearReverse(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
}

// This feels more complex than the original solution. Lots of if statements.

console.log(isLeapYearReverse(2016));      // true
console.log(isLeapYearReverse(2015));      // false
console.log(isLeapYearReverse(2100));      // false
console.log(isLeapYearReverse(2400));      // true
console.log(isLeapYearReverse(240000));    // true
console.log(isLeapYearReverse(240001));    // false
console.log(isLeapYearReverse(2000));      // true
console.log(isLeapYearReverse(1900));      // false
console.log(isLeapYearReverse(1752));      // true
console.log(isLeapYearReverse(1700));      // false
console.log(isLeapYearReverse(1));         // false
console.log(isLeapYearReverse(100));       // false
console.log(isLeapYearReverse(400));       // true
