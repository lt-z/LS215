/*
Write a recursive function that computes the nth Fibonacci number,
where nth is an argument passed to the function.

---
Problem:
Input: Number
Output: Number

Definitions and Rules:
- Fibonacci gets the next number as a the sum of the previous two numbers.

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
- Base Case: if number <= 2 -> return 1
- Return fibonacci(number - 1) + fibonacci(number - 2)
*/

function fibonacci(number) {
  if (number <= 2) return 1;

  return fibonacci(number - 1) + fibonacci(number - 2);
}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765