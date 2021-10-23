/*
Write a function that determines the mean (average) of the
three scores passed to it, and returns the letter associated
with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'

Tested values are all between 0 and 100. There is no need to check
for negative values or values greater than 100.
---
Problem:
Input: 3 Numbers
Output: String

Definition and Rules:
- Input validation is not needed.
- Inputs will be from 0 - 100.
- Get average of the three grades and determine what grade based on the
grade list.

Examples/Test Cases:
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
getGrade(0, 50, 40);    // "F"
getGrade(50, 70, 95);    // "C"

Data Structure:
Object -> String

Algorithm:
- Create object of the grade list:
  - Key: grade, Value: average
- Calculate average and store as value.
- Iterate through the object:
  - If avg grade is above value -> return key
*/

function getGrade(num1, num2, num3) {
  const GRADES = {
    A: 90,
    B: 80,
    C: 70,
    D: 60,
    F: 0
  };

  let grades = [num1, num2, num3];
  let average = grades.reduce((sum, num) => sum + num) / grades.length;

  for (let grade in GRADES) {
    if (Number(GRADES[grade]) < average) return grade;
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
console.log(getGrade(0, 50, 40));    // "F"
console.log(getGrade(50, 70, 95));    // "C"