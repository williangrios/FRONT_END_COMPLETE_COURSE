

let arr = [0, 1, 2, 3, 4];
let arr2 = [];


function verifyArray(arr){
    if (arr.length == 0){
        throw new Error('The array is empty');
    }
    else{
        for(let i = 0; i < arr.length ; i++){
            console.log(i);
        }
    }
}



verifyArray(arr);
verifyArray(arr2);