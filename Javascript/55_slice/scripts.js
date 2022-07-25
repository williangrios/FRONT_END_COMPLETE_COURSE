

let listNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//returns 3
console.log (listNumbers.slice(3, 4));

//returns 3, 4
console.log (listNumbers.slice(3, 5));

//returns 3, 4, 5, 6, 7, 8, 9
console.log (listNumbers.slice(3));

//negative numbers, will be decreasing from array
//returns 8, 9
console.log (listNumbers.slice(-2));

//returns 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
console.log(listNumbers);