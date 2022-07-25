// //1
// let arrayNumbers = [1, 2, 3, 4, 5];
// console.log(arrayNumbers[0]);
// console.log(arrayNumbers[2]);
// console.log(arrayNumbers[3]);


// //2
// let array2 =  [1, 2];
// let array4 =  [1, 2, 3, 4];
// console.log(array2.length);
// console.log(array4.length);

// //3
// let bus = {
//     wheels: 8,
//     passengersLimit: 40,
//     doors: 2
// }
// console.log(`Wheels number: ${bus.wheels}`);
// console.log(`Passengers limit: ${bus.passengersLimit}`);
// console.log(`Doors number: ${bus.doors}`);
// console.log(onibus);


//4
// let bus = {
//         wheels: 8,
//         passengersLimit: 40,
//         doors: 2
// }

// bus.Windows = 20;
// delete bus.wheels;

// console.log(`Windows number: ${bus.Windows}`);

// console.log(bus.wheels);
// //returns undefined

//5
// let arrayNames = ['josh', 'john', 'mariah', 'willian', 'bill'];

// if (arrayNames.includes('willian')){
//     console.log('The name is in array');
// }
// else {
//     console.log('The name is not in array');
// }

// arrayNames.forEach(name => {
//     if (name == 'willian'){
//         console.log('The name is in array');
//     }
// });

// //6
// function elementsArray(arr){
//     if (arr.length >= 6){
//         return 'many elements';
//     }
//     else {
//         return 'few elements';
//     }
// }

// let array3Elements = [1, 2, 3];
// let array6Elements = [1, 2, 3, 4, 5, 6];

// console.log(elementsArray(array3Elements));
// console.log(elementsArray(array6Elements));

// //7
// let arrayBrands = ['bmw', 'fiat', 'vw', 'gm', 'ford'];

// arrayBrands.forEach(brand => {
//     console.log(brand);
//     }
// )

// for(i = 0; i <= arrayBrands.length-1; i++) {
//     console.log(arrayBrands[i]);
// }

// //8

// let carJSON = {
//     "brand": "bmw",
//     "doors": 4, 
//     "color": "green",
// }

// console.log(carJSON.brand);
// console.log(carJSON.color);
// console.log(carJSON.doors);

// //9
// let arrayWords = "Hello, guys.. How are you doing ?".split(" ");
// for (i = 0; i < arrayWords.length; i++) {
//     console.log(arrayWords[i]);
// }

//10
let calculator ={
    sum: function(x, y) {
        return x + y;
    },

    subtract: function (x, y) {
        return x - y;
    },

    multiply: function (x, y) {
        return x * y;
    },

    division: function (x, y) {
        return x/y;
    }
}

console.log(calculator.sum(10, 3));
console.log(calculator.subtract(10, 3));
console.log(calculator.multiply(10, 3));
console.log(calculator.division(10, 2));
