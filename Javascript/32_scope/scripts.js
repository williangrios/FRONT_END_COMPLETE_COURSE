
let variableY = 10;

function printMsgVariableY(){
    let variableY = 20;
    return variableY;
}

//print 10
console.log(variableY);



//print 20
console.log(printMsgVariableY());