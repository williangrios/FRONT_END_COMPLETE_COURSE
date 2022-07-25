

let regNumbers = new RegExp(/\d/); //0-9

console.log(regNumbers.test('32')); //true
console.log(regNumbers.test('3df2')); //true
console.log(regNumbers.test('df')); //false


let regAlphaNumbers = new RegExp(/\w/);

console.log(regAlphaNumbers.test('32')); //true
console.log(regAlphaNumbers.test('3df2')); //true
console.log(regAlphaNumbers.test('df')); //true
console.log(regAlphaNumbers.test('!')); //false
console.log(regAlphaNumbers.test(' ')); //false


let regSpace = new RegExp(/\s/);

console.log(regSpace.test('32')); //false
console.log(regSpace.test('3df2')); //false
console.log(regSpace.test('df')); //false
console.log(regSpace.test('!')); //false
console.log(regSpace.test(' ')); //true


let regNotNumbers = new RegExp(/\D/);
console.log(regNotNumbers.test('32')); //false
console.log(regNotNumbers.test('3df2')); //true
console.log(regNotNumbers.test('df')); //true
console.log(regNotNumbers.test(' ')); //true

let regNotAlphaNumbers = new RegExp(/\W/);

console.log(regNotAlphaNumbers.test('32')); //false
console.log(regNotAlphaNumbers.test('3df2')); //false
console.log(regNotAlphaNumbers.test('df')); //false
console.log(regNotAlphaNumbers.test('!')); //true
console.log(regNotAlphaNumbers.test(' ')); //true


let regNotSpace = new RegExp(/\S/);

console.log(regNotSpace.test('32')); //true
console.log(regNotSpace.test('3df2')); //true
console.log(regNotSpace.test('df')); //true
console.log(regNotSpace.test('!')); //true
console.log(regNotSpace.test(' ')); //false


let regDot = new RegExp(/./);

console.log(regDot.test('32')); //true
console.log(regDot.test('3df2')); //true
console.log(regDot.test('df')); //true
console.log(regDot.test('!')); //true
console.log(regDot.test(' ')); //true