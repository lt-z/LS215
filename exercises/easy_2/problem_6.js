/*
Create a simple madlib program that prompts for a noun, a verb,
an adverb, and an adjective, and injects them into a story that
you create.
---
Problem:
Input: Strings
Output: String

Definitions and Rules:
- Four inputs as strings.
- Use prompt for inputs.
- Output a combination of the inputs.

Examples:
dog, walk, blue, quickly ->
'Do you walk your blue dog quickly? That's hilarious!'

cat, sit, black, calmly ->
'Do you sit your black cat calmly? That's hilarious!'

Data Structure:
String

Algorithm:
- Receive inputs via readline sync and store as separate vars.
- Output with the vars.
*/
let readline = require('readline-sync');

function madlib() {
  let noun = readline.question('Enter a noun: ');
  let verb = readline.question('Enter a verb: ');
  let adj = readline.question('Enter an adjective: ');
  let adv = readline.question('Enter an adverb: ');

  return `Do you ${verb} your ${adj} ${noun} ${adv}? That's hilarious!`;
}

console.log(madlib());