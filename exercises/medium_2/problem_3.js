/*
Write a function that takes a year as an argument and returns the
number of 'Friday the 13ths' in that year. You may assume that the
year is greater than 1752 (when the modern Gregorian Calendar was
adopted by the United Kingdom). You may also assume that the same
calendar will remain in use for the foreseeable future.

---
Problem:
Input: Number (year)
Output: Number

Definitions and Rules:
- Count the number of Friday the 13ths in that year.
- Assume year is > 1752.

Examples/Test Cases:
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

Data Structure:
Number

Algorithm:
- Create counter.
- Iterate through 0 - 11 months:
 - Create a new Date object for each month (input year, month iteration, 13)
 - If the 13th is on a friday -> counter + 1
- Return counter
*/

function fridayThe13ths(year) {
  let counter = 0;

  for (let mon = 0; mon <= 11; mon += 1) {
    let date = new Date(year, mon, 13);
    if (date.getDay() === 5) {
      counter += 1;
    }
  }
  return counter;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2