/*
Write a function that implements the Caesar Cipher.
The Caesar Cipher is one of the earliest and simplest ways
to encrypt plaintext so that a message can be transmitted securely.
It is a substitution cipher in which each letter in a plaintext is
substituted by the letter located a given number of positions away in
the alphabet. For example, if the letter 'A' is right-shifted by 3 positions,
it will be substituted with the letter 'D'. This shift value is often referred
to as the key. The "encrypted plaintext" (ciphertext) can be decoded using
this key value.

The Caesar Cipher only encrypts letters (including both lower and upper case).
Any other character is left as is. The substituted letters are in the same
letter case as the original letter. If the key value for shifting exceeds
the length of the alphabet, it wraps around from the beginning.

// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

Problem:
Input: String, Number (shift)
Output: String

Definitions and Rules:
- Substituted letter is case sensitive.
- If shift # exceeds the length of the alphabet, it wraps around.
- Do not shift non-alphabet characters.
- Can you shift backwards? No

Examples/Test Cases:
- 'abc', 3 -> 'def'
- 'The quick brown fox jumps over the lazy dog!', 5 -> Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!
- 'a', 47 -> 'v'

Data Structure:
Make the structure an array, then convert into a string.

Algorithm:
- Create alphabet string.

- Convert string into an array.
- Iterate through the array (map):
  - If regex matches alphabet ->
    - store if uppercase as boolean
    - get current index in alphabet string
    - let totalshift = index + shift #
    - while (total shift is larger or equal than 26) {
        totalshift -= 26
    }
    - return alphabet uppercase ? touppercase : lowercase
  - return nonalphabet
*/

function caesarEncrypt(string, shift) {
  const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
  let array = string.split('');

  return array.map(char => {
    if (char.match(/[a-z]/i)) {
      let uppercase = char.toUpperCase() === char;
      let index = ALPHA.indexOf(char.toLowerCase());
      let totalShift = index + shift;
      while (totalShift >= 26) {
        totalShift -= 26;
      }
      return uppercase ? ALPHA[totalShift].toUpperCase() : ALPHA[totalShift];
    }
    return char;
  }).join('');
}

console.log(caesarEncrypt('A', 3));
console.log(caesarEncrypt('A', 0));
console.log(caesarEncrypt('y', 5));
console.log(caesarEncrypt('a', 47));
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));