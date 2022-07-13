

class Car {
    constructor (brand) {
        this.brand = brand;
    }

    ride (){
        return 'vrummmmmmm';
    }

}


let newCarVW = new Car('VW');

Car.prototype.wheels = 6;

console.log (newCarVW.brand);
console.log (newCarVW.wheels);
console.log (Car.prototype.wheels);


console.log (newCarVW.ride());