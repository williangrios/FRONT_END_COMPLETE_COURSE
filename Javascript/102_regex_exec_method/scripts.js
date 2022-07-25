

let phoneNumber = new RegExp(/\d{4,5}-\d{4}/);

console.log(phoneNumber.exec('343234'));//RETURNS NULL (INSTEAD FALSE)
console.log(phoneNumber.exec('34325-2344'));//RETURNS A OBJECT

