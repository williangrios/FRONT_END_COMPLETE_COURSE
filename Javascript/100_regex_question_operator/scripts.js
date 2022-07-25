
let exp = new RegExp(/TEST\s?\d?/);

console.log(exp.test('TEST')); //true
console.log(exp.test('TEST 1')); //true
console.log(exp.test('TEST 2')); //true
console.log(exp.test('TEST d')); //true
console.log(exp.test('TES')); //false


let fruit = new RegExp(/APP?LE/);

console.log(fruit.test('APPLE')); //true
console.log(fruit.test('APLE')); //true
console.log(fruit.test('APPE')); //false


let textUser = RegExp(/\d+\w?/);
console.log(textUser.test('123')); //true
console.log(textUser.test('123a')); //true
console.log(textUser.test('123 ')); //true
