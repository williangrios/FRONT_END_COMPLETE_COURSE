
function recursion(n) {
    if (n-1 < 2){
        console.log('Recursion ends');
    } else if ( n % 2 != 0) {
        console.log('Odd number' + n);
        recursion (n-1);
    } else {
        console.log('pair number' + n);
        recursion (n -2);
    }
}

recursion (39);
recursion (10);
recursion (55);