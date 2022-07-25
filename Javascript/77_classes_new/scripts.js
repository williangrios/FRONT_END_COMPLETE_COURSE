

function Car (brand, wheels) {
    this.brand = brand;
    this.wheels = wheels;
    this.ride = function (){
        return 'vrummmm';
    }
}

let newCar = new Car('Volvo', 4);

console.log(newCar.brand);
console.log(newCar.wheels);
console.log(newCar.ride());