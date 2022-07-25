
let car = {
    doors: '4',
    brand: 'none',
    ride: function(){
        console.log('vrummm');
    }
}

//object from a class
let carVW = Object.create(car);
carVW.brand = 'VW';
carVW.ride();




//object from a class
let carFord = Object.create(car);
carFord.brand = 'Ford';
carFord.ride();