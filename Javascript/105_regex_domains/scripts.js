
let domain = new RegExp(/[?www.]\w+\.com|com.br/);


console.log (domain.test('www.google.com.br')); //true
console.log (domain.test('www.google.net')); //false

console.log (domain.test('www.facebook.com')); //true

console.log (domain.test('facebook.com.br')); //true