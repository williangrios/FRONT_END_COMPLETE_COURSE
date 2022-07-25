let prom = Promise.resolve(5+3);


console.log('some code');

console.log(prom);

prom.then((value) => {return value + 5})
    .then((value) => {console.log(value)});