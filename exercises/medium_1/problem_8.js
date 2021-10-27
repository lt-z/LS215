/*
Write a recursive function that computes the nth Fibonacci number,
where nth is an argument passed to the function.

---
Problem:
Input: Number
Output: Number

Definitions and Rules:
- Fibonacci gets the next number as a the sum of the previous two numbers.
- Use procedural style to solve.

Examples/Test Cases:
fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765

Data Structure:
Number

Algorithm:
- Create initial array [1, 1]
- Iterate from 3 to number:
  - [num1, num2] = [num2, num1 + num2]
- Return num2
*/

let memo = (function() {
  let memo = {};
  return function() {
    return memo;
  };
})();

function fibonacci(number) {
  if (number <= 2) return 1;
  if (memo[number]) return memo[number];
  memo[number] = fibonacci(number - 1) + fibonacci(number - 2);
  return memo[number];
}

console.log(memo);
console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));      // 12586269025
console.log(fibonacci(75));      // 2111485077978050