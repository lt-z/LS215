/*
Log all even numbers from 1 to 99, inclusive, to the console,
with each number on a separate line.

Problem:
Input: None
Output: undefined (console log)

Definitions and Rules:
- Log even numbers from 1 - 99 (inclusive)

Examples/Test Cases: N/A

Data Structure:
Number

Algorithm:
- Create counter.
- While counter is below or at 99:
  - If counter % 2 === 0 -> log counter
  - Iterate counter
*/

function logEven() {
  let counter = 1;

  while (counter <= 99) {
    if (counter % 2 === 0) console.log(counter);
    counter += 1;
  }
}

logEven();