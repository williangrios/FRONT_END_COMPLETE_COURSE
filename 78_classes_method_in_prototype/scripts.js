
function Car (brand, doors) {
    this.brand = brand;
    this.doors = doors;
}

Car.prototype.ride = function(noise){
    return noise;
}


let carVW = new Car('VW', 3);


console.log(carVW.brand);
console.log(carVW.doors);
console.log(carVW.ride('rammmmm'));