

function isNumber (num){
    let number = Number(num);

    if (Number.isNaN(number)){
        alert('Please, just numbers');
    }
    else {
        alert('Ok');
    }
}

isNumber(prompt('Type a number, please'));
