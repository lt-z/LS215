/*
Write a function that takes a string consisting of one or more space separated
words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.
---
Problem:
Input: String
Output: Object

Definitions and Rules:
- Count the length of each word and add into a counter.
- Include any kind of punctuations.
- Empty string is an empty object.

Examples/Test Cases:
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

Data Structure:
Array -> Object

Algorithm:
- Convert string into an array via split
- Create a counter for the length of each string:
  - Reduce {} -> key = word.length, value += 1 || 1
- Return counter
*/

function wordSizes(string) {
  if (string.length === 0) return {};

  let array = string.split(' ');
  let lengthCounter = (array) => {
    return array.reduce((obj, word) => {
      obj[word.length] = obj[word.length] + 1 || 1;
      return obj;
    }, {});
  };
  return lengthCounter(array);
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}