
let product1 = '1';
let product2 = '2';
let product3 = '3';
let product4 = '4';
let product5 = '5';

let arrayProducts = [product1.padStart(4, '0')];
arrayProducts.push(product2.padStart(4, '0'));
arrayProducts.push(product3.padStart(4, '0'));
arrayProducts.push(product4.padStart(4, '0'));
arrayProducts.push(product5.padStart(4, '0'));

arrayProducts.forEach(element => {
    console.log(element);
});

//returns
//0001
//0002
//0003
//0004
//0005