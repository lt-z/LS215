/*
Write a function that takes an integer as an argument and returns the
next featured number greater than the integer. Issue an error message
if there is no next featured number.

---
Problem
Input: Number
Output: Number

Definitions and Rules:
- Featured number:
  - Is odd.
  - Multiple of 7
  - All digits occur once each.
- Ignore input validation

Examples/Test Cases:
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

Data Structure:
Number

Algorithm:
- Determine if current number is featured:
  - If is odd and multiple of 7
  - If all unique digits:
    - Convert to array -> If every digit's index of === last index of.
- While number < 9876543201:
  - number + 1
  - Check if featured -> if true -> return featured.
- Otherwise, return string of not possible number.
*/

function featured(number) {
  while (number < 9876543201) {
    number += 1;
    if (isFeatured(number)) return number;
  }
  return 'There is no possible number that fulfills those requirements';
}

function isFeatured(number) {
  return (number % 2 === 1 &&
    number % 7 === 0 &&
    String(number).split('').every((num, _ ,arr) => arr.indexOf(num) === arr.lastIndexOf(num)));
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."