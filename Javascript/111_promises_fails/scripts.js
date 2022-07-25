let promFail = Promise.resolve(new Error("some error"));


console.log('some code');

// console.log(promFail);

 promFail.then(value => console.log(value))
         .catch( reason => console.log("error: " + reason));