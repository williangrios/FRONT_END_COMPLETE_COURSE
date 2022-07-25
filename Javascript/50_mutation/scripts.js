
let obj1 = {
    firstName: 'John',
}

let obj2 = {
    firstName: 'John',
}

let obj3 = {
    firstName: 'John',
}

obj2 = obj1;

console.log(obj1 == obj2); //return true
console.log(obj2 == obj3); //return false

obj1.firstName = 'will';

console.log(obj1.firstName); //return will
console.log(obj2.firstName); //return will
console.log(obj3.firstName); //return John