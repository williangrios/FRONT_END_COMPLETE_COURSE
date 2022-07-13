
const car = {
    wheels: 4,

    ride: function(){
        return "Vrummm";
    }
}

console.log(Object.getPrototypeOf(car));
//returns object

console.log(Object.getPrototypeOf(car) === Object.prototype);
//returns true


console.log(car.hasOwnProperty('wheels'));
//fallback method hasOwnProperty from object
//return true