
let car = {
    wheels: 4,
    color: 'white', 
    owner:'will', 
    brand: 'BMW',
    ride: function() {
        console.log('vrummm');
    },
    stop: function() {
        console.log('stopping');
    }
}

console.log(Object.keys(car));