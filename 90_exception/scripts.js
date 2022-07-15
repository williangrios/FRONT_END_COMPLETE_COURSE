function hi(nameUser){
    if (typeof nameUser != 'string'){
        throw new Error('This is not a string!');
    }
    else{
        console.log (`Hi, ${nameUser}`);
    }
}

hi('John');

hi(23);

