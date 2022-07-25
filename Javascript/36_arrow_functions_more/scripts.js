

//if in small expression, can be writed in one line without 'return'
let double = x => x * 2;

//if just one param, can be writed without parentheses ()
let triple = y => {
    return y * 3;
}

console.log(double(3));

console.log(triple(3));