

function sumXZ ( x , z ) {
    if (x===undefined || z===undefined){
        console.log ('Please, provide 2 arguments');
    }
    else {
        return x + z;
    }
}


console.log (sumXZ ( 3 ));

console.log (sumXZ ( 3, 4 ));