
let person = {
    "firstName": "willian",
    "lastName" : "rios", 
    "age": 37,
    "country": "Brazil", 
    "hobbies": ["walk", "football", "gym"],
}

let personStringFy = JSON.stringify (person);

console.log(person);

console.log(personStringFy);
//returns {"firstName":"willian","lastName":"rios","age":37,"country":"Brazil"}

let personParse = JSON.parse(personStringFy);
console.log(personParse);
//returns Object { firstName: "willian", lastName: "rios", age: 37, country: "Brazil" }

