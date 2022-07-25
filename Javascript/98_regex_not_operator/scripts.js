
let regNotab = new RegExp(/[^ab]/);

console.log (regNotab.test('a')); //false
console.log (regNotab.test('b')); //false
console.log (regNotab.test('ab')); //false
console.log (regNotab.test('abc')); //true
console.log (regNotab.test('a nice day ab')); //true


letNotAToZ = new RegExp(/[^a-z]/);
console.log (letNotAToZ.test('a')); //false
console.log (letNotAToZ.test('b')); //false
console.log (letNotAToZ.test('p')); //false
console.log (letNotAToZ.test('P')); //true
console.log (letNotAToZ.test('ab')); //false
console.log (letNotAToZ.test('abc')); //false
console.log (letNotAToZ.test('a nice day ab')); //true
console.log (letNotAToZ.test('anicedayab')); //false