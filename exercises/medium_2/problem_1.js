/*
Write a function that takes a string and returns an object
containing the following three properties:

- the percentage of characters in the string that are lowercase letters
- the percentage of characters that are uppercase letters
- the percentage of characters that are neither

You may assume that the string will always contain at least one character.

---
Problem
Input: String
Output: Object

Definitions and Rules:
- Get number of lowercase letters, uppercase letters, and neither.
- There will always be at least one character in the string.
- None letter chars are considered 'neither'.

Examples/Test Cases:
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

Data Structure:
String -> Object

Algorithm:
- Create 3 variables to store count of each character type.
  - lowercase
  - uppercase
  - neither
- Iterate through the string:
  - If lowercase -> add to count
  - If uppercase -> add to count
  - if neither -> add to count
- Return object
*/
function letterPercentages(string) {
  let [lowercase, uppercase, neither] = [0, 0, 0];

  for (let char in string) {
    if (string[char].match(/[^a-z]/i)) {
      neither += 1;
    } else if (string[char].toUpperCase() === string[char]) {
      uppercase += 1;
    } else if (string[char].toLowerCase() === string[char]) {
      lowercase += 1;
    }
  }

  return {
    lowercase: calculatePercentage(lowercase, string.length),
    uppercase: calculatePercentage(uppercase, string.length),
    neither: calculatePercentage(neither, string.length)
  };
}

function calculatePercentage(num, total) {
  return ((num / total) * 100).toFixed(2);
}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('avbc'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }