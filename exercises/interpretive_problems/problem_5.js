/*
The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution.
It uses a series of Caesar Ciphers based on the letters of a keyword.
Each letter of the keyword is treated as a shift value. For instance,
the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds
to a shift value of 3. In other words, the shift value used for a letter is
equal to its index value in the alphabet. This means that the letters 'a'-'z'
are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also
equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by
applying the current shift value to a Caesar Cipher for that particular
character. To make this more concrete, let's look at the following example:


plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

Notice that in the example, the key isn't moved forward if the character isn't
in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts
alphabetic characters.

Write a function that implements the Vigenere Cipher. The case of the keyword
doesn't matter—in other words, the resulting encryption won't change depending
on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').
---
Problem:
Input: String (text to encrypt), String (keyword)
Output: String (encrypted text)

Definitions and Rules:
- Each letter in the keyword is a shift value based on the index of the letter.
  - 'a' - shifts 0
  - 'b' - shifts 1
  - 'c' - shifts 2
- keyword is case insensitive.
- Only encrypt alphabetic characters.
- Remaining characters remain in place.
- The keyword repeats for the length of the string (ignores non-alpha chars)

Examples/Test Cases:
'a', 'a' -> a
'a', 'b' -> b
'd', 'f' -> i
'p', 'm' -> b
'z', 'm' -> l

Data Structure:
Array

Algorithm:
- Convert string into an array (split).
- Create counter.
- Map each letter with the keyword letter:
  - Map array with char and idx:
    - if char:
      - return [char, keyword[(counter += 1 % length of keyword)]]
    else:
      - return char
- Iterate through the mapped array:
  - if item is an array:
    - send and return to caesar cipher -> (char, keyword char)
  - else
    - return item
- Join array to string.
*/

function cigenereEncrypt(string, keyword) {
  let counter = -1;
  let array = string.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      return [char, keyword[(counter += 1) % keyword.length]];
    } else {
      return char;
    }
  });

  return array.map(char => {
    if (Array.isArray(char)) {
      return caesarEncrypt(char[0], char[1]);
    }
    return char;
  }).join('');
}

function caesarEncrypt(char, shift) {
  const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
  let uppercase = char.toUpperCase() === char;
  let index = ALPHA.indexOf(char.toLowerCase());
  let totalShift = index + ALPHA.indexOf(shift);
  while (totalShift >= 26) {
    totalShift -= 26;
  }
  return uppercase ? ALPHA[totalShift].toUpperCase() : ALPHA[totalShift];
}


console.log(cigenereEncrypt(`Pineapples don't go on pizzas!`, 'meat'));
console.log(caesarEncrypt('d', 'f'));
console.log(caesarEncrypt('z', 'm'));


