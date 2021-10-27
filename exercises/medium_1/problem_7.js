/*
Memoization is an approach that involves saving a computed answer for future
reuse, instead of computing it from scratch every time it is needed.
In the case of our recursive fibonacci function, using memoization
saves calls to fibonacci(nth - 2) because the necessary values have
already been computed by the recursive calls to fibonacci(nth - 1).

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

function fibonacci(number) {
  let fib = [1, 1];

  for (let num = 3; num <= number; num += 1) {
    [fib[0], fib[1]] = [fib[1], fib[0] + fib[1]];
  }
  return fib[1];
}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));      // 12586269025
console.log(fibonacci(75));      // 2111485077978050