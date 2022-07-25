
let domain = new RegExp(/\w+@\w+\.\w+/);


console.log (domain.test('williangrios@yahoo.com.br')); //true
console.log (domain.test('raul@gmail.com')); //true

console.log (domain.test('www.facebook.com')); //false

console.log (domain.test('faust123@hotmail.com')); //true