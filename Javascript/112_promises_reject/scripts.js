function verifyNumb (numb) {
        return new Promise((resolve, reject) => {
                if (numb == 2) {
                        resolve (console.log('the number is ' + numb));
                }
                else {
                        reject (console.log (new Error('fail')));
                }
        });       
}


verifyNumb(2);
verifyNumb(3);