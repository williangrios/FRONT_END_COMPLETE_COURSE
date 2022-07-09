
//setting default value y = 2
function multiply ( x, y =2){
    return x * y;
}

//return 9
console.log(multiply(3 , 3));


//return 6
console.log(multiply(3 ));


function power(base, exp = 2) {
    return Math.pow (base, exp);
}

//return 4
console.log (power (2 ));

//return 4
console.log (power (2, 2));

//return 8
console.log (power (2, 2));
