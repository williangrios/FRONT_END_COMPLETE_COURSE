
let products = ['webcam', 'phone', 'computer', 'iphone', 'tag', 'notebook', 'ipad'];

console.log('-----Loop For-----');
for (let i=0; i <= products.length-1 ; i++) {
    console.log(`product ${i+1} - ${products[i]}`);
}


let i = 0;
console.log('-----Loop While-----');
while (i <= products.length-1) {
    console.log(`product ${i+1} - ${products[i]}`);
    i++;
}


i=0;
console.log('-----Loop Do While-----');
do {
    console.log(`product ${i+1} - ${products[i]}`);
    i++;
} while (i< products.length)