// //1 
// function printHelloWorld() {
//     console.log('Hello World');
// }
// printHelloWorld();

// //2
// function printAge(age) {
//     console.log (`Your age is ${age}`);
// }
// printAge(30);

//3
// function sumNumbers( x , y ){
//     return x + y;
// }
// console.log(sumNumbers(4, 6));

//4
// function randomNum (maxNum) {
//     return Math.floor(Math.random() * maxNum) + ;
// }

// console.log(randomNum(10));
// console.log(randomNum(100));
// console.log(randomNum(1000));
// console.log(randomNum(10000));
// console.log(randomNum(100000));
// console.log(randomNum(1000000));


//5
// function canIn (age){
//     if (age >=18){
//         console.log('Can in');
//     }
//     else {
//         console.log("Can't in");
//     }
// }

// canIn(14);
// canIn(22);

//6
// function recognizeData (x){
//     if (typeof(x) === "string") {
//         console.log("this is a string");        
//     } else if (typeof(x) === "boolean"){
//         console.log("this is a boolean");        
//     } else if (typeof(x) === "number"){
//         console.log("this is a number");        
//     }
// }

// recognizeData("wil");
// recognizeData(3);
// recognizeData(true);

//  7
// function mathAbs(x){
//     return Math.abs(x);
// }

// console.log( mathAbs(3));
// console.log( mathAbs(-43));

// //8
// function verifyText(textData) {
    
//     if (textData.length > 10) {
//         console.log("Very big text");
//     }
//     else {
//         console.log("Text ok");
//     }
// }

// verifyText("Hello World Big text");
// verifyText("Small text");

// //9
// function powerNumbers (base, power) {
//     return Math.pow (base, power);
//     // return base**power;
// }

// console.log (powerNumbers(4, 2));
// console.log (powerNumbers(3, 2));

//10
function ex10(countDown){
    for (let count = countDown; count != 0; count-- ){
        if (count % 2 === 0){
            console.log(`the odd number is ${count} `);
        }
    }
}

ex10 (10);
ex10 (20);
ex10 (15);