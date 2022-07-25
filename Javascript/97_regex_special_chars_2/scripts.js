

let regAtLeastTwoNumbers = new RegExp(/\d\d/);

console.log(regAtLeastTwoNumbers.test('1')); //false
console.log(regAtLeastTwoNumbers.test('01'));  //true
console.log(regAtLeastTwoNumbers.test('14')); //true
console.log(regAtLeastTwoNumbers.test('29')); //true
console.log(regAtLeastTwoNumbers.test('58')); //true
console.log(regAtLeastTwoNumbers.test('1301')); //true
console.log(regAtLeastTwoNumbers.test('13df01')); //true
console.log(regAtLeastTwoNumbers.test('asd')); //false

let regAtLeastThreChars = new RegExp(/\w\w\w/);

console.log(regAtLeastThreChars.test('1')); //false
console.log(regAtLeastThreChars.test('01'));  //false
console.log(regAtLeastThreChars.test('14')); //false
console.log(regAtLeastThreChars.test('29')); //false
console.log(regAtLeastThreChars.test('58')); //false
console.log(regAtLeastThreChars.test('1301')); //true
console.log(regAtLeastThreChars.test('13df01')); //true
console.log(regAtLeastThreChars.test('asd')); //true
