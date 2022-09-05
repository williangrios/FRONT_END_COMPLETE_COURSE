let person = {
    firstName: 'Will',
    lastName: 'Rios',
    age: 37
}

let newPerson = {
    ...person,
    city: 'Arcos'
}

console.log(newPerson);