/*
A double number is an even-length number whose left-side
digits are exactly the same as its right-side digits.
For example, 44, 3333, 103103, and 7676 are all double numbers,
 whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument
multiplied by two, unless the argument is a double number; otherwise,
return the double number as-is.
---
Problem:
Input: Number
Output: Number

Definitions and Rules:
- Double number = even length and left and right side equal.
- Double number is not a mirror of the left and right.
- If double, leave as double
- Otherwise, multiply the number by 2.

Examples:
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

Data Structure:
Number

Algorithm:
- Get first half
- Get second half
- If length is odd or first half doesnt equal to second half:
  - return number * 2
- Else -> return number.
*/

function twice(number) {
  let half = String(number).length / 2;
  let first = String(number).slice(0, half);
  let second = String(number).slice(half);

  if (String(number).length % 2 !== 0 || first !== second) {
    return number * 2;
  } else {
    return number;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676