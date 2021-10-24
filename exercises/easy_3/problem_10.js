/*
Modify the wordSizes function from the previous exercise to exclude
non-letters when determining word size. For instance, the word size
of "it's" is 3, not 4.
---
Problem:
Input: String
Output: Object

Definitions and Rules:
- Exclude non-letters from original problem 9.

Examples/Test Cases:
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}

Data Structure:
Array -> Object

Algorithm:
- Add a string replace to remove non-letters with empty string before splitting.
*/

function wordSizes(string) {
  if (string.length === 0) return {};

  let array = string.replace(/[^a-z ]/gi, '').split(' ');
  let lengthCounter = (array) => {
    return array.reduce((obj, word) => {
      obj[word.length] = obj[word.length] + 1 || 1;
      return obj;
    }, {});
  };
  return lengthCounter(array);
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}