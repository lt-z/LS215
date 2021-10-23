/*
Given a string that consists of some words and an assortment
of non-alphabetic characters, write a function that returns
that string with all of the non-alphabetic characters replaced
by spaces. If one or more non-alphabetic characters occur in a
row, you should only have one space in the result (i.e., the
result string should never have consecutive spaces).

---
Problem:
Input: String
Output: String

Definitions and Rules:
- Return string without non-alpha characters replaced as strings.
- Consecutive non-alpha = one space.
- There should be no consecutive spaces.

Examples/Test Cases:
cleanUp("---what's my +*& line?");    // " what s my line "

Data Structure:
String

Algorithm:
- Regex replace -> [^a-z]+/gi replace with ' '
*/

function cleanUp(string) {
  return string.replace(/[^a-z]+/gi, ' ');
}


console.log(cleanUp("---what's my +*& line?"));    // " what s my line "