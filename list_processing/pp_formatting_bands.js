const bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function capitalize(name) {
  const array = name.split(' ');
  return array.map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
}

function removeDots(name) {
  return name.replace(/\./g, '');
}

function processBands(data) {
  return data.map((item) => ({
    name: capitalize(removeDots(item.name)),
    country: 'Canada',
    active: item.active,
  }));
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ];
