/*
Build a madlibs program that takes a text template as input,
plugs in a selection of randomized nouns, verbs, adjectives,
and adverbs into that text, and then returns it. You can build
your lists of nouns, verbs, adjectives, and adverbs directly
into your program. Your program should read this text and,
for each line, place random words of the appropriate types into
the text and return the result.

---
Problem
Input: String
Output: String

Definitions and Rules:
- Input should be a string.
  - keywords are NOUN, VERB, ADJ, ADV
- Object will store arrays of the replacement text
Within the arrays are the words for each type of word.

Examples/Test Cases:
'The NOUN VERB the NOUN ADJ' -> The cat pats the cat's head.

'The ADJ brown NOUN ADV VERB the ADJ yellow NOUN' ->
'The hungry brown cat lazily licks the noisy yellow dog.'

Data Structure:
Object -> String

Algorithm:
- Create an empty result string.
- Convert string to array by split and iterate through the string:
  - If NOUN -> Add randomized word
  - If VERb -> Add randomized word
  - If adj -> Add ranomized word
  - If adv -> Add ranomized word
  - Else -> add original word.
- Return madlibbed string


- Create randomizer:
  - return array[Math.floor(Math.random() * array.length)];
*/

const REPLACEMENT_TEXTS = {
  adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  noun: ['fox', 'dog', 'head', 'leg', 'tail'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
};

function madlibs(template) {
  let replaceText = (match) => {
    let key = match.replace(/[^a-z]/gi, '');
    let value = Math.floor(Math.random() * REPLACEMENT_TEXTS[key].length);
    return REPLACEMENT_TEXTS[key][value];
  };

  return template.replace(/\${[a-z]+}/g, replaceText);
}

const template1 = 'The ${adjective} brown ${noun} ${adverb} ' +
                '${verb} the ${adjective} yellow ' +
                '${noun}, who ${adverb} ${verb} his ' +
                '${noun} and looks around.';

const template2 = "The ${noun} ${verb} the ${noun}'s ${noun}.";

console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".

/*
function madlibs(template) {
  return template.split(' ').map(word => {
    if (word.includes('NOUN')) {
      return word.replace('NOUN', randomize(obj['NOUN']));
    } else if (word.includes('VERB')) {
      return word.replace('VERB', randomize(obj['VERB']));
    } else if (word.includes('ADJ')) {
      return word.replace('ADJ', randomize(obj['ADJ']));
    } else if (word.includes('ADV')) {
      return word.replace('ADV', randomize(obj['ADV']));
    } else {
      return word;
    }
  }).join(' ');
}
*/