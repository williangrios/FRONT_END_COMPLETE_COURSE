

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

console.log(motorcicleRed instanceof Vehicle);

console.log(new Motorcicle instanceof Vehicle);

console.log(motorcicleRed instanceof Object);