

class Car {
    constructor (brand) {
        this.brand = brand;
    }

    ride (){
        return 'vrummmmmmm';
    }

}

let carPassenger = new Car('BMW');

let wheels = Symbol();

Car.prototype[wheels] =4;

//getting symbol
console.log(Car.prototype[wheels]);


console.log(carPassenger[wheels]);