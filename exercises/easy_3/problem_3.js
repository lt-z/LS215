/*
Build a program that logs when the user will retire
and how many more years the user has to work until retirement.
----
Problem:
Input: Strings
Output: String

Definitions and Rules:
- Need current age and retirement age.
- Ages cannot be negative.
- Retirement age should not be below current age.
- Log two lines of code.

Examples/Test Cases:
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

Data Structure:
Number -> String

Algorithm:
- Prompt for current age.
- Prompt for retirement age.
- Calculate age difference.
- Log to console.
*/
let prompt = require('readline-sync').question;

function retire() {
  let age = Number(prompt('What is your age? '));
  let retire = Number(prompt('At what age would you like to retire? '));

  let diff = retire - age;

  return `It's 2020. You will retire in ${2020 + diff}.
You have only ${diff} years of work to go!`;
}

console.log(retire());