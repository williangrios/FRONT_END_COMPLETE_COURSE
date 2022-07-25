

let vehicle = {

    maxSpeed: 90,

    setMaxSpeed: function (maxSpeed){
        this.maxSpeed = maxSpeed;
    },

    getMaxSpeed: function (){
        return this.maxSpeed;
    }

}


let passengerCar = Object.create(vehicle);
console.log(passengerCar.getMaxSpeed());
//return 90

console.log(passengerCar.hasOwnProperty('maxSpeed'));
//return false

passengerCar.setMaxSpeed(110);
console.log(passengerCar.getMaxSpeed());
//return 110

console.log(vehicle.hasOwnProperty('maxSpeed'));
//return true

console.log(passengerCar.hasOwnProperty('maxSpeed'));
//return true

console.log(Object.getPrototypeOf( passengerCar) === vehicle);
//return true

console.log(Object.getPrototypeOf( passengerCar) === Object.prototype);
//return false

console.log(Object.getPrototypeOf( vehicle) === Object.prototype);
//return true