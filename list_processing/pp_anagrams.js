function anagram(word, list) {
  const sort = (wrd) => wrd.split('').sort().join('');
  return list.filter((wrd) => sort(wrd) === sort(word));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana'])); // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana'])); // [ "enlist", "inlets" ]
