
//simple function
function printInConsole () {
    console.log('Function printInConsole, simple function');
}
printInConsole();


//smiple functin with param
function printInConsoleWithParam (par) {
    console.log('Function printInConsole, simple function with param=' + par);
}
printInConsoleWithParam(4);


//function in a const
const y = function() {
    console.log('Function in const');
}
y();

//function in a const with param
const z = function(m){
    console.log(m);
}
z('Function in const with param=' + m);