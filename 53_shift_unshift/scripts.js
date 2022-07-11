//add and remove in first position in array

let names = ['Josh', 'Mariah', 'John', 'Will'];

//shift remove in first position
let namesRemoved = names.shift();

console.log('Names');
console.log(names);
console.log('Names Removed');
console.log(namesRemoved);

//unshift add in first position
console.log('New names add');
names.unshift('Mr. Brow');
names.unshift('Mark');
console.log(names);