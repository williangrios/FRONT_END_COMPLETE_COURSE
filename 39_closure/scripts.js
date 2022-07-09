

function rememberSum (x) {
    return function (y) {
        return x + y;
    }
}

//return 7
let sum1 = rememberSum(2);
console.log(sum1(5));

//return 12
let sum2 = rememberSum(5);
console.log (sum2(7));

//sample 2
function count(i){
    let cont = i;
    let addCont = function () {
        console.log(cont);
        cont ++;
    }
    return addCont;
}


let myCount = count(10);

myCount();
myCount();
myCount();
myCount();
myCount();