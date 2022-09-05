
const car = {
    wheels: 4,
    color: 'red',
    owner: 'willian'
}

const {wheels: rodas, color: cor, owner: proprietario} = car;

console.log(rodas);
console.log(cor);
console.log(proprietario);


console.log(car.wheels);
console.log(car.color);
console.log(car.owner);



//same name 
const {wheels, color, owner} = car;


console.log(wheels);
console.log(color);
console.log(owner);