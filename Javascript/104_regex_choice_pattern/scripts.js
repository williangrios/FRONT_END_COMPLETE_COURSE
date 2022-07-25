
let fruits = new RegExp(/\d+ (bananas?|apples?|oranges?)/);

console.log(fruits.test('23 bananas')); //true
console.log(fruits.test('1 banana')); //true
console.log(fruits.test('1 ban')); //false

console.log(fruits.test('22 apples'));//true

console.log(fruits.test('1 orange'));//true
console.log(fruits.test('2 oranges'));//true
