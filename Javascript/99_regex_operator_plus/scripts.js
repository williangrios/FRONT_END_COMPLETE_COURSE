

let manyOrFewDigits = RegExp(/\d+/);

console.log(manyOrFewDigits.test(233)); //true
console.log(manyOrFewDigits.test('233')); //true
console.log(manyOrFewDigits.test('3')); //true
console.log(manyOrFewDigits.test('a')); //false
console.log(manyOrFewDigits.test('323523d')); //true
console.log(manyOrFewDigits.test('4234235232343')); //true
console.log(manyOrFewDigits.test(' ')); //false