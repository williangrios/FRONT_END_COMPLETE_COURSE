


//object regexp
const reg1 = new RegExp(/[12345]/);

//return false
console.log(reg1.test('Have number 6?'));

//return true
console.log(reg1.test('Have number 2?'));

//return true
console.log(reg1.test('Have number 13?'));

//return true
console.log(reg1.test('Have number 25?'));

//return true
console.log(reg1.test('Have number 26?'));

//return false
console.log(reg1.test('Have number 60?'));


//object regexp RANGE VALUES (any number)
const reg2 = new RegExp(/[0-9]/);


//return true
console.log(reg1.test('Have number 6289374923870?'));