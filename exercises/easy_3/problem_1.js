/*
Build a program that randomly generates Teddy's age,
and logs it to the console. Have the age be a random
number between 20 and 200 (inclusive).
---
Problem:
Input: None
Output: String

Definitions and Rules:
- Randomly generate number from 20 to 200 (inclusive)
- Add number into string.

Examples/Test Cases:
N/A

Data Structure:
Number to String

Algorithm:
- Generate random number between 20 and 200:
  - Math.floor(Math.random() * (200 - 20 + 1) + 20);
- Return as string.
*/

function teddy() {
  let value = Math.floor(Math.random() * (200 - 20 + 1) + 20);
  return `Teddy is ${value} years old!`;
}

console.log(teddy());

// Further Exploration
// Yes, it would round toe the nearest integer, rather than the lowest.
// Create an if statement to validate `min` and `max`.