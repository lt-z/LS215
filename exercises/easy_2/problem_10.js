/*
Write a function that takes a year as input and returns the
century. The return value should be a string that begins with
the century number, and ends with 'st', 'nd', 'rd', or 'th' as
appropriate for that number.

New centuries begin in years that end with 01. So, the years
1901 - 2000 comprise the 20th century.
---
Problem:
Input: Number
Output: String

Definitions and Rules:
- New centuries begins with `01`. So 1901 - 2000 = 20th
- Centuries:
  - 1st
  - 2nd
  - 3rd
  - 4th
  - 11th
  - 12th
  - 13th
  - 24th - 100th

Examples/Test Cases:
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

Data Structure:
Number -> String

Algorithm:
- Calculate century -> Round up to nearest
- If century's last 2 digits is 11, 12, 13 ->
  return its respective type
- If century's last digit is 1, 2, 3, or default ->
  return its respective type
*/

function century(year) {
  let cent = String(Math.ceil(year / 100));
  switch (cent.slice(-2)) {
    case '11': return cent + 'th';
    case '12': return cent + 'th';
    case '13': return cent + 'th';
  }
  switch (cent.slice(-1)) {
    case '1': return cent + 'st';
    case '2': return cent + 'nd';
    case '3': return cent + 'rd';
    default: return cent + 'th';
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"