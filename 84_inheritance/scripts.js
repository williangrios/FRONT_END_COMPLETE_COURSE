

class Vehicle{
    constructor(brand, color, wheels){
        this.brand = brand;
        this.color = color;
        this.wheels = wheels;
    }

    ride(noise){
        return noise;
    }

    stop(){
        return "stopping";
    }

}

class Motorcicle extends Vehicle {
    constructor (brand, color, wheels, helm){
        //super constructor
        super(brand, color, wheels);
        this.helm = helm;
    }
}

let motorcicleRed = new Motorcicle('BMW', 'red', 2, false);

console.log(motorcicleRed.ride('vrammmm'));
console.log(motorcicleRed.brand);
console.log(motorcicleRed.wheels);
console.log(motorcicleRed.color);
console.log(motorcicleRed.helm);