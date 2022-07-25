

class Car {
    constructor (brand) {
        this.brand = brand;
    }
}


let newCarVW = new Car('VW');

Car.prototype.brand = "FIAT";

console.log (newCarVW.brand); //VW
console.log (Car.prototype.brand); //FIAT