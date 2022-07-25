

function createCar(brand, wheels, noise) {
    let car = Object.create({});
    car.wheels = wheels;
    car.brand = brand;

    car.ride = function (noise){
        return noise;
    }

    return car;
}


let newCar = createCar('fiat', 4);

console.log(newCar.brand);
console.log(newCar.wheels);
console.log(newCar.ride('vrummmmm'));