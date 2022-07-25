

let car = {
    color: 'red',
    tires: 4, 
    owner: 'will',
    ride: function() {
        console.log('vrummm');
    }
}

console.log (car.tires);

//removing tires
delete car.tires;
//return undefined
console.log (car.tires);

//adding wheels
car.wheels = 4;
//return 4
console.log (car.wheels);


car.ride();

console.log(car);