/*
--(P)roblem--
Input: String
Output: Array of strings

Explicit Requirements:
- If it is an empty string, return an empty array.
- If there is no input, return an empty array.
- Each word is separated by a single space.

Implicit Requirements:
- Include all characters, not just alpha.

--(E)xamples--
'cow sheep chicken' -> ['cow 3', 'sheep 5', 'chicken 7']
'hello' -> ['hello 5']
'' -> []


--(D)ata Structure--
Convert into an array.

--(A)lgorithm--
1. If input argument is empty or if string is empty -> return []
2. Convert into an array with `split`.
3. Iterate through the array and transform to include length of each string.
4. Return array.
*/

function wordLengths(string) {
  if (arguments.length === 0 || string.length === 0) return [];

  return string.split(' ').map(word => {
    return `${word} ${word.length}`;
  });
}


console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []
