/*
--(P)roblem--
Input: Target String, string text
Output: Number

Explicit Requirements:
- Inputs will always be provided.
- Word breaks are all spaces.

Implicit Requirements:
- Case-insensitive.

--(E)xamples--
'sed' -> 3


--(D)ata Structure--
Convert into an array then into a number.

--(A)lgorithm--
1. Create a counter.
2. Remove all punctuation and lowercase all words.
3. Convert input text into an array via `map`, then iterate:
    If target word = word -> counter += 1
4. Return counter
*/

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';


function searchWord(targetWord, text) {
  targetWord = '\\b' + targetWord + '\\b';
  let regex = new RegExp(targetWord, 'gi');
  let matches = text.match(regex);

  return matches ? matches.length : 0;
}

// function searchWord(targetWord, text) {
//   let counter = 0;
//   let array = text.replace(/[.!?]g/, '').split(' ').map(toLowerCase);
//   array.forEach(word => {
//     if (word === targetWord) {
//       counter += 1;
//     }
//   });
//   return counter;
// }

// function toLowerCase(word) {
//   return word.toLowerCase();
// }

console.log(searchWord('sed', text));      // 3
console.log(searchWord('qui', text));      // 4