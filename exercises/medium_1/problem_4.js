/* eslint-disable max-lines-per-function */
/*
Write a function that implements a miniature stack-and-register-based
programming language that has the following commands (also called
operations or tokens):

n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.

---
Problem:
Input: String
Output: Number

Definitions and Rules:
- Register stores the current value.
- PUSH pushes the register value to the stack.
- ADD pops a value from the stack and adds to register
- SUB pops a value from the stack and subs from register
- MULT pops a value from the stack and mult it by the register
- DIV pops a value from the stack and divides register by popped value
- REMAINDER pops a value from stack and divides the reigster by the popped stack (%)
- POP removes the topmost item from the stack and places it into the register
- PRINT print the register value

Examples/Test Cases:
See below.

Data Structure:
Array

Algorithm:
- Split the string into an array
- Create stack [];
- Create register = 0
- Iterate through array:
  - If number -> store the value
  - Else if PUSH -> push to stack
  - Else if PRINT -> console.log register
  - Else if ADD -> pop value and add to register
  - Else if SUB -> pop value and sub from register
  - Else if MULT -> pop value and mult with register
  - Else if DIV -> pop value and divide register with pop
  - Else if REMAINDEr -> pop value and register modulo pop
  - Else if POP -> pop value and register = value.
*/

function minilang(string) {
  let array = string.split(' ');
  let stack = [];
  let register = 0;

  array.forEach(item => {
    if (item.match(/[0-9]/gi)) {
      register = Number(item);
    } else if (item === 'PUSH') {
      stack.push(register);
    } else if (item === 'ADD') {
      register += stack.pop();
    } else if (item === 'SUB') {
      register -= stack.pop();
    } else if (item === 'MULT') {
      register *= stack.pop();
    } else if (item === 'DIV') {
      register = Math.floor(register / stack.pop());
    } else if (item === 'REMAINDER') {
      register = Math.floor(register % stack.pop());
    } else if (item === 'POP') {
      register = stack.pop();
    } else if (item === 'PRINT') {
      console.log(register);
    }
  });
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)