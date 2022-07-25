

let phoneNumber = new RegExp(/\d{4,5}-\d{4}/);


console.log(phoneNumber.test('234')); //false
console.log(phoneNumber.test('23214'));//false
console.log(phoneNumber.test('34325-'));//false
console.log(phoneNumber.test('34325-234'));//false
console.log(phoneNumber.test('34325-2344'));//true



//note below () are special chars, then we have to put \ (escape)
let phoneNumberDDD = new RegExp(/\(\d{2}\)\d{4,5}-\d{4}/);


console.log(phoneNumberDDD.test('234')); //false
console.log(phoneNumberDDD.test('34325-2344'));//false
console.log(phoneNumberDDD.test('37-34325-2344'));//false
console.log(phoneNumberDDD.test('(37)34325-2344'));//true

