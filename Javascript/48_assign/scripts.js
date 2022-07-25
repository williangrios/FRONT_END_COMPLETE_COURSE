
let car1 = {
    color: 'white',
    year: 1990,
    owner: 'Will'
}

let car2 = {
    wheels: 4,
    doors: 2
}

console.log(car1);
console.log(car2);

Object.assign(car2, car1);

console.log(car1);
console.log(car2);
