
let names = ['will', 'john', 'mathaus'];

let [name1, name2, name3] = names;

console.log(name1);
console.log(name2);
console.log(name3);


let {0:n1, 2:n3} = names;
console.log(n1);
console.log(n3);

