
let domain = new RegExp(/^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/);


console.log (domain.test('12/08/2002')); //true
console.log (domain.test('12082002')); //false
console.log (domain.test('01/18/2002')); //true
console.log (domain.test('218/08/2002')); //false
console.log (domain.test('18/08/200')); //false
