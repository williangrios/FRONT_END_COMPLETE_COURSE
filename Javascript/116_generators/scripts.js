function* generatorId() {
        let newId = 0;
        while (true) {
                yield newId ++;
        }
}

let createId = generatorId();

console.log(createId.next().value);
console.log(createId.next().value);
console.log(createId.next().value);
console.log(createId.next().value);

//returns object
console.log(createId.next());