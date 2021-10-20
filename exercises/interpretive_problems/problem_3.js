/*
A collection of spelling blocks has two letters per block,
as shown in this list:
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words
that do not use both letters from any given block.
You can also only use each block once.
Write a function that takes a word string as an argument and
returns true if the word can be spelled using the set of blocks,
false otherwise. You can consider the letters to be case-insensitive
when you apply the rules.


Problem:
Input: String
Output: Boolean

Examples/Test Case:
BUTCH -> false
HELLO -> false
VITAL -> false
vital -> false
BARS -> true
PAVES -> true
BATCH -> true
batch -> true

Definitions and Rules:
- You can only use one letter per each block.
- Input is one more characters.
- Letters are case-insensitive.

Data structure:
Store block as an object.
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

Algorithm:
- Create spellingBlock object -> key: value pairs per block.
- Convert string to uppercase.
- Iterate through the object:
  - If key in string and value in string -> false
  - If key in string.length > 1 or value in string.length > 1 -> false
- Return true
*/

function isBlockWord(string) {
  const SPELLING_BLOCK = {
    B: 'O', X: 'K', D: 'Q', C: 'P', N: 'A',
    G: 'T', R: 'E', F: 'S', J: 'W', H: 'U',
    V: 'I', L: 'Y', Z: 'M'
  };
  string = string.toUpperCase();

  for (let key in SPELLING_BLOCK) {
    let keyRegex = new RegExp(key, 'g');
    let valRegex = new RegExp(SPELLING_BLOCK[key], 'g');

    if (string.includes(key) && string.includes(SPELLING_BLOCK[key])) return false;
    if ((string.match(keyRegex) || []).length > 1 || (string.match(valRegex) || []).length > 1) return false;
  }
  return true;
}


console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('HELLO'));      // false
console.log(isBlockWord('VITAL'));       // false
console.log(isBlockWord('vital'));       // false
console.log(isBlockWord('BARS'));       // true
console.log(isBlockWord('PAVES'));       // true
console.log(isBlockWord('BATCH'));       // true
console.log(isBlockWord('batch'));       // true